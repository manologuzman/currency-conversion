import {
  Controller,
  Get,
  Query,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrencyConversionService } from '../../application/services/currency-conversion.service';
import {
  CurrencyConversionRequestDto,
  CurrencyConversionResponseDto,
} from '../../application/dtos/currency-conversion.dto';
import { JwtAuthGuard } from '../middleware/jwt-auth.guard';
import { CurrencyConversionException } from '../../domain/exceptions/currency-conversion.exception';

@ApiTags('Conversión de Monedas')
@Controller('currency-conversion')
export class CurrencyConversionController {
  constructor(
    private readonly currencyConversionService: CurrencyConversionService,
  ) {}

  @Get('convert')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Convertir moneda' })
  @ApiResponse({
    status: 200,
    description: 'Conversión exitosa',
    type: CurrencyConversionResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Parámetros inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 500, description: 'Error del servidor' })
  async convertCurrency(
    @Query() query: CurrencyConversionRequestDto,
  ): Promise<CurrencyConversionResponseDto> {
    try {
      const result = await this.currencyConversionService.convertCurrency(
        query.amount,
        query.sourceCurrency,
        query.destinationCurrency,
      );

      return new CurrencyConversionResponseDto(
        result.conversionDate,
        result.conversionRate,
        result.originalAmount,
        result.resultingAmount,
      );
    } catch (error) {
      if (error instanceof CurrencyConversionException) {
        throw new HttpException(error.message, error.statusCode);
      }
      throw new HttpException(
        'Error interno del servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
