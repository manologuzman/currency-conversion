import { CurrencyConversion } from '../models/currency-conversion.model';

export interface CurrencyConversionRepository {
  convert(
    amount: number,
    sourceCurrency: string,
    destinationCurrency: string,
  ): Promise<CurrencyConversion>;
}
