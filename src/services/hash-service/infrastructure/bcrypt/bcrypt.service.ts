import { Injectable } from '@nestjs/common';
import { HashServiceContract } from '@/hash-service/domain/contracts/hash-service.contract';
import { Hash } from '@/hash-service/domain/entities/hash.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class BcryptService implements HashServiceContract {
  private readonly saltRounds = Number(process.env.SALT_ROUNDS);

  async hash(value: string): Promise<Hash> {
    return { value: await bcrypt.hash(value, this.saltRounds) };
  }

  async compare(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }
}
