import { Container } from "inversify";
import { EntityRepository } from "./domain/entity/repository";
import { SlackLogger } from "./infra/logger";
import { CreateUseCase } from "./services/entity/use_cases/create_use_case";
import { FindUseCase } from "./services/entity/use_cases/find_use_case";
import { ListUseCase } from "./services/entity/use_cases/list_use_case";
import { TYPES } from "./types";


export const container = new Container()

container.bind(TYPES.EntityListUseCase).to(ListUseCase)
container.bind(TYPES.EntityFindUseCase).to(FindUseCase)
container.bind(TYPES.EntityCreateUseCase).to(CreateUseCase)

container.bind(TYPES.EntityRepository).to(EntityRepository)

container.bind(TYPES.Logger).to(SlackLogger)