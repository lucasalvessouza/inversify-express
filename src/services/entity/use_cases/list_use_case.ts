import { inject, injectable } from "inversify";
import { EntityRepositoryInterface } from "../../../domain/entity/repository";
import { TYPES } from "../../../types";


export interface ListUseCaseInterface {
  execute(): any
}

@injectable()
export class ListUseCase implements ListUseCaseInterface {
  constructor(
    @inject(TYPES.EntityRepository) private entityRepository: EntityRepositoryInterface
  ) {}

  execute() {
    return this.entityRepository.list()
  }
} 