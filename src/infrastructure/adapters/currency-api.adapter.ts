import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { CurrencyConversionRepository } from '../../domain/interfaces/currency-conversion.repository';
import { CurrencyConversion } from '../../domain/models/currency-conversion.model';
import { ExternalApiException } from '../../domain/exceptions/currency-conversion.exception';

interface CurrencyApiResponse {
  success: boolean;
  error?: {
    info?: string;
  };
  info?: {
    rate: number;
  };
  result?: number;
}

@Injectable()
export class CurrencyApiAdapter implements CurrencyConversionRepository {
  constructor(private readonly configService: ConfigService) {}

  async convert(
    amount: number,
    sourceCurrency: string,
    destinationCurrency: string,
  ): Promise<CurrencyConversion> {
    try {
      const apiUrl = this.configService.get<string>('CURRENCY_API_URL');
      if (!apiUrl) {
        throw new ExternalApiException('La URL de la API no está configurada');
      }
      const apiKey = this.configService.get<string>('CURRENCY_API_KEY');
      if (!apiKey) {
        throw new ExternalApiException(
          'La clave de la API no está configurada',
        );
      }

      const response = await axios.get<CurrencyApiResponse>(apiUrl, {
        params: {
          from: sourceCurrency,
          to: destinationCurrency,
          amount,
        },
        headers: {
          apikey: apiKey,
        },
      });

      const data = response.data;

      if (!data.success) {
        throw new ExternalApiException(data.error?.info || 'Error desconocido');
      }

      if (!data.info?.rate || !data.result) {
        throw new ExternalApiException(
          'La respuesta de la API no contiene la información esperada',
        );
      }

      return new CurrencyConversion(
        amount,
        sourceCurrency,
        destinationCurrency,
        data.info.rate,
        data.result,
        new Date(),
      );
    } catch (error: any) {
      if (error instanceof ExternalApiException) {
        throw error;
      }
      const errorMessage = getErrorMessage(error);
      throw new ExternalApiException(errorMessage);
    }
  }
}

// Función auxiliar para extraer el mensaje de error de forma segura
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
function getErrorMessage(error: unknown): string {
  if (error === null || error === undefined) {
    return 'Error desconocido';
  }

  if (typeof error === 'object') {
    // Verifica si tiene la estructura típica de error de Axios
    const anyError = error as any;
    if (
      anyError.response?.data?.message &&
      typeof anyError.response.data.message === 'string'
    ) {
      return anyError.response.data.message;
    }

    // Verifica si tiene un mensaje de error estándar
    if (anyError.message && typeof anyError.message === 'string') {
      return anyError.message;
    }
  }

  // Por defecto, usa un mensaje genérico
  return 'Error al comunicarse con el servicio de conversión';
}
