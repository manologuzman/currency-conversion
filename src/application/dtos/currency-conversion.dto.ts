import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CurrencyConversionRequestDto {
  @ApiProperty({
    description: 'Monto a convertir',
    example: 100,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly amount: number;

  @ApiProperty({
    description: 'Moneda de origen (código ISO 4217)',
    example: 'USD',
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 3)
  readonly sourceCurrency: string;

  @ApiProperty({
    description: 'Moneda de destino (código ISO 4217)',
    example: 'EUR',
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 3)
  readonly destinationCurrency: string;
}

export class CurrencyConversionResponseDto {
  @ApiProperty({
    description: 'Fecha de conversión',
    example: '2023-07-25T15:30:00Z',
  })
  readonly conversionDate: Date;

  @ApiProperty({
    description: 'Tasa de conversión',
    example: 0.85,
  })
  readonly conversionRate: number;

  @ApiProperty({
    description: 'Monto original',
    example: 100,
  })
  readonly originalAmount: number;

  @ApiProperty({
    description: 'Monto resultante',
    example: 85,
  })
  readonly resultingAmount: number;

  constructor(
    conversionDate: Date,
    conversionRate: number,
    originalAmount: number,
    resultingAmount: number,
  ) {
    this.conversionDate = conversionDate;
    this.conversionRate = conversionRate;
    this.originalAmount = originalAmount;
    this.resultingAmount = resultingAmount;
  }
}
