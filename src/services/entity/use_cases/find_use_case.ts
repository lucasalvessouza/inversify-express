import { inject, injectable } from "inversify";
import { EntityRepositoryInterface } from "../../../domain/entity/repository";
import { TYPES } from "../../../types";

type FindParams = {
  id: string
}

export interface FindUseCaseInterface {
  execute(params: FindParams): any
}

@injectable()
export class FindUseCase implements FindUseCaseInterface {
  constructor(
    @inject(TYPES.EntityRepository) private entityRepository: EntityRepositoryInterface
  ) {}

  execute(params: FindParams) {
    return this.entityRepository.getById(Number(params.id))
  }
} 