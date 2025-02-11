import { Hash } from '@/hash-service/domain/entities/hash.entity';

export abstract class HashServiceContract {
  abstract hash(value: string): Promise<Hash>;
  abstract compare(value: string, hash: string): Promise<boolean>;
}
