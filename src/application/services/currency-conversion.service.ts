import { Injectable, Inject } from '@nestjs/common';
import { CurrencyConversionRepository } from '../../domain/interfaces/currency-conversion.repository';
import { CurrencyConversion } from '../../domain/models/currency-conversion.model';
import { CurrencyConversionException } from '../../domain/exceptions/currency-conversion.exception';

@Injectable()
export class CurrencyConversionService {
  constructor(
    @Inject('CurrencyConversionRepository')
    private readonly currencyConversionRepository: CurrencyConversionRepository,
  ) {}

  async convertCurrency(
    amount: number,
    sourceCurrency: string,
    destinationCurrency: string,
  ): Promise<CurrencyConversion> {
    if (amount <= 0) {
      throw new CurrencyConversionException('El monto debe ser mayor que cero');
    }

    if (!sourceCurrency || sourceCurrency.length !== 3) {
      throw new CurrencyConversionException(
        'La moneda de origen debe ser un código ISO 4217 válido (3 caracteres)',
      );
    }

    if (!destinationCurrency || destinationCurrency.length !== 3) {
      throw new CurrencyConversionException(
        'La moneda de destino debe ser un código ISO 4217 válido (3 caracteres)',
      );
    }

    const validSource = !/^[A-Za-z]+$/.test(sourceCurrency);
    const validDestionation = !/^[A-Za-z]+$/.test(destinationCurrency);

    if (validSource == true || validDestionation === true) {
      throw new CurrencyConversionException(
        'La moneda de destino debe ser un código ISO 4217 válido (3 caracteres)',
      );
    }

    try {
      return await this.currencyConversionRepository.convert(
        amount,
        sourceCurrency.toUpperCase(),
        destinationCurrency.toUpperCase(),
      );
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const errorMessage =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        typeof error.message === 'string' ? error.message : 'Error desconocido';
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const statusCode =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        typeof error.statusCode === 'number' ? error.statusCode : 500;
      throw new CurrencyConversionException(
        `Error al convertir moneda: ${errorMessage}`,
        Number(statusCode),
      );
    }
  }
}
