import { ID } from '@/src/services/id-generator/domain/entities/id.entity';

export abstract class IdGeneratorServiceContract {
  abstract generateV4(): ID;
}
