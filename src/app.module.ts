import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CurrencyConversionService } from './application/services/currency-conversion.service';
import { CurrencyApiAdapter } from './infrastructure/adapters/currency-api.adapter';
import { CurrencyConversionController } from './infrastructure/controllers/currency-conversion.controller';
import { AuthModule } from './infrastructure/config/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [CurrencyConversionController],
  providers: [
    CurrencyConversionService,
    {
      provide: 'CurrencyConversionRepository',
      useClass: CurrencyApiAdapter,
    },
  ],
})
export class AppModule {}
