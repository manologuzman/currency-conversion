import { ApiProperty } from '@nestjs/swagger';

export class CurrencyConversionDto {
  @ApiProperty({
    description: 'Fecha de conversión',
    example: '2023-07-25T15:30:00Z',
  })
  readonly conversionDate: string;

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
}
