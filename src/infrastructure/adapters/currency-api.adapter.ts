import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { CurrencyConversionRepository } from '../../domain/interfaces/currency-conversion.repository';
import { CurrencyConversion } from '../../domain/models/currency-conversion.model';
import { ExternalApiException } from '../../domain/exceptions/currency-conversion.exception';

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
      const apiKey = this.configService.get<string>('CURRENCY_API_KEY');

      const response = await axios.get(apiUrl, {
        params: {
          from: sourceCurrency,
          to: destinationCurrency,
          amount,
        },
        headers: {
          apikey: apiKey,
        },
      });

      if (!response.data.success) {
        throw new ExternalApiException(
          response.data.error?.info || 'Error desconocido',
        );
      }

      return new CurrencyConversion(
        amount,
        sourceCurrency,
        destinationCurrency,
        response.data.info.rate,
        response.data.result,
        new Date(),
      );
    } catch (error) {
      if (error instanceof ExternalApiException) {
        throw error;
      }
      throw new ExternalApiException(
        error.response?.data?.message ||
          error.message ||
          'Error al comunicarse con el servicio de conversión',
      );
    }
  }
}
