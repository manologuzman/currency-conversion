import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotNumber } from '../validators/is-not-number.validator';

export class CurrencyValidatorDto {
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
  @IsNotNumber({
    message: 'La moneda de origen no debe contener solo dígitos',
  })
  readonly sourceCurrency: string;

  @ApiProperty({
    description: 'Moneda de destino (código ISO 4217)',
    example: 'EUR',
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 3)
  @IsNotNumber({
    message: 'La moneda de destino no debe contener solo dígitos',
  })
  readonly destinationCurrency: string;
}
