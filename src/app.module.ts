import { Module } from '@nestjs/common';
import { IdGeneratorServiceProvider } from '@/id-generator-service/provider';
import { HashServiceProvider } from '@/hash-service/provider';
import { ConfigModule } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { UserModule } from './features/user/user.module';
import { IdGeneratorModule } from './services/id-generator/id-generator.module';
import { HashServiceModule } from './services/hash-service/hash-service.module';
import { PostgreSQLConfig } from './features/database/infrastructure/postgres/postgres.config';

@Module({
  imports: [
    UserModule,
    IdGeneratorModule,
    HashServiceModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
      load: [PostgreSQLConfig],
    }),
  ],
  controllers: [],
  exports: [Logger],
  providers: [IdGeneratorServiceProvider, HashServiceProvider, Logger],
})
export class AppModule {}
