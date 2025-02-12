import { registerAs } from '@nestjs/config';
import { PostgresConfigInterface } from './postgres-config.interface';
import * as process from 'process';

export const PostgreSQLConfig = registerAs(
  'postgres',
  (): PostgresConfigInterface => ({
    host: process.env.POSTGRES_DB_HOST as string,
    port: Number(process.env.POSTGRES_DB_PORT) || 5432,
    username: process.env.POSTGRES_DB_USER as string,
    password: process.env.POSTGRES_DB_PASSWORD as string,
    database: process.env.POSTGRES_DB_NAME as string,
  }),
);
