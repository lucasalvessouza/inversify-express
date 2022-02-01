import { inject, injectable } from "inversify";
import { EntityRepositoryInterface } from "../../../domain/entity/repository";
import { TYPES } from "../../../types";

type CreateParams = {
  name: string
}

export interface CreateUseCaseInterface {
  execute(params: CreateParams): any
}

@injectable()
export class CreateUseCase implements CreateUseCaseInterface {
  constructor(
    @inject(TYPES.EntityRepository) private entityRepository: EntityRepositoryInterface
  ) {}

  execute(params: CreateParams) {
    return this.entityRepository.create(params)
  }
} 