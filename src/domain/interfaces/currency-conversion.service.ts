import { CurrencyConversion } from '../models/currency-conversion.model';

export interface CurrencyConversionService {
  convert(
    amount: number,
    sourceCurrency: string,
    destinationCurrency: string,
  ): Promise<CurrencyConversion>;
}
