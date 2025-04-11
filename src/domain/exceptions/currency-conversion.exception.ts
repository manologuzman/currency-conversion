export class CurrencyConversionException extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 400,
  ) {
    super(message);
    this.name = 'CurrencyConversionException';
  }
}

export class InvalidCurrencyException extends CurrencyConversionException {
  constructor(currency: string) {
    super(`La moneda "${currency}" no es válida según el estándar ISO 4217`);
    this.name = 'InvalidCurrencyException';
  }
}

export class NegativeAmountException extends CurrencyConversionException {
  constructor() {
    super('El monto a convertir no puede ser negativo');
    this.name = 'NegativeAmountException';
  }
}

export class ExternalApiException extends CurrencyConversionException {
  constructor(message: string) {
    super(`Error en la API externa: ${message}`);
    this.name = 'ExternalApiException';
  }
}
