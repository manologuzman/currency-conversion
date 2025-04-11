export class CurrencyConversion {
  constructor(
    public readonly originalAmount: number,
    public readonly sourceCurrency: string,
    public readonly destinationCurrency: string,
    public readonly conversionRate: number,
    public readonly resultingAmount: number,
    public readonly conversionDate: Date,
  ) {}
}
