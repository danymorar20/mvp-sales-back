import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigInterface } from './postgres-config.interface';
import { UserModel } from '@/user/infrastructure/database/typeorm/models/user.model';
import { PostgreSQLConfig } from './postgres.config';

@Module({
  imports: [
    ConfigModule.forFeature(PostgreSQLConfig),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const database = config.get<PostgresConfigInterface>('postgres');
        if (!database) throw new Error('Database configuration is missing');
        return {
          type: 'postgres',
          host: database.host,
          port: database.port,
          username: database.username,
          password: database.password,
          database: database.database,
          entities: [UserModel],
          synchronize: true,
        };
      },
    }),
    TypeOrmModule.forFeature([UserModel]),
  ],
  exports: [TypeOrmModule],
})
export class PostgresModule {}
