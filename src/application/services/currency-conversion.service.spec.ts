import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyConversionService } from './currency-conversion.service';
import { CurrencyConversionRepository } from '../../domain/interfaces/currency-conversion.repository';
import { CurrencyConversion } from '../../domain/models/currency-conversion.model';
import { CurrencyConversionException } from '../../domain/exceptions/currency-conversion.exception';

describe('CurrencyConversionService', () => {
  let service: CurrencyConversionService;
  let repository: CurrencyConversionRepository;

  beforeEach(async () => {
    const mockRepository = {
      convert: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CurrencyConversionService,
        {
          provide: 'CurrencyConversionRepository',
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CurrencyConversionService>(CurrencyConversionService);
    repository = module.get<CurrencyConversionRepository>(
      'CurrencyConversionRepository',
    );
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('convertCurrency', () => {
    it('debería convertir correctamente la moneda', async () => {
      // Arrange
      const amount = 100;
      const sourceCurrency = 'USD';
      const destinationCurrency = 'EUR';
      const mockConversion = new CurrencyConversion(
        amount,
        sourceCurrency,
        destinationCurrency,
        0.91,
        91,
        new Date(),
      );

      jest.spyOn(repository, 'convert').mockResolvedValue(mockConversion);

      // Act
      const result = await service.convertCurrency(
        amount,
        sourceCurrency,
        destinationCurrency,
      );

      // Assert
      expect(repository.convert).toHaveBeenCalledWith(amount, 'USD', 'EUR');
      expect(result).toEqual(mockConversion);
    });

    it('debería lanzar excepción cuando el monto es negativo', async () => {
      // Act & Assert
      await expect(service.convertCurrency(-100, 'USD', 'EUR')).rejects.toThrow(
        CurrencyConversionException,
      );
    });

    it('debería lanzar excepción cuando la moneda de origen no es válida', async () => {
      // Act & Assert
      await expect(service.convertCurrency(100, 'US', 'EUR')).rejects.toThrow(
        CurrencyConversionException,
      );
    });

    it('debería lanzar excepción cuando la moneda de destino no es válida', async () => {
      // Act & Assert
      await expect(service.convertCurrency(100, 'USD', 'EU')).rejects.toThrow(
        CurrencyConversionException,
      );
    });

    it('debería propagar la excepción desde el repositorio', async () => {
      // Arrange
      jest
        .spyOn(repository, 'convert')
        .mockRejectedValue(
          new CurrencyConversionException('Error en el repositorio'),
        );

      // Act & Assert
      await expect(service.convertCurrency(100, 'USD', 'EUR')).rejects.toThrow(
        'Error al convertir moneda: Error en el repositorio',
      );
    });
  });
});
