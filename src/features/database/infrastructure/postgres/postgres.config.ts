import { registerAs } from '@nestjs/config';
import { PostgresConfigInterface } from './postgres-config.interface';
import * as process from 'process';
const {
  POSTGRES_DB_HOST,
  POSTGRES_DB_PORT,
  POSTGRES_DB_USER,
  POSTGRES_DB_PASSWORD,
  POSTGRES_DB_NAME,
} = process.env;

// export const PostgreSQLConfig = ConfigModule.forFeature(
//   (): { postgres: PostgresConfigInterface } => ({
//     postgres: {
//       host: POSTGRES_DB_HOST as string,
//       port: Number(POSTGRES_DB_PORT) || 5432,
//       username: POSTGRES_DB_USER as string,
//       password: POSTGRES_DB_PASSWORD as string,
//       database: POSTGRES_DB_NAME as string,
//     },
//   }),
// );
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
