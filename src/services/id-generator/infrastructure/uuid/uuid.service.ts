import { Injectable } from '@nestjs/common';
import { ID } from '@/src/services/id-generator/domain/entities/id.entity';
import { v4 } from 'uuid';
import { IdGeneratorServiceContract } from '@/id-generator-service/domain/contract/id-generator-service.contract';

@Injectable()
export class UUIDService implements IdGeneratorServiceContract {
  generateV4(): ID {
    const uuid = v4();
    return {
      value: uuid,
    };
  }
}
