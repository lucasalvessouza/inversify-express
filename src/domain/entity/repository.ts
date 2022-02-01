import { inject, injectable } from "inversify"
import { Logger } from "../../infra/logger"
import { TYPES } from "../../types"


type Entity = {
  id: number
  name: string
}

type EntityCreateData = {
  name: string
}

export interface EntityRepositoryInterface {
  list(): Entity[]
  getById(id: number): Entity
  create(data: EntityCreateData): Entity
}


const _entities = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Emma'
  }
]

@injectable()
export class EntityRepository implements EntityRepositoryInterface {
  constructor(
    @inject(TYPES.Logger) private logger: Logger
  ) {}

  list(): Entity[] {
    return _entities
  }

  getById(id: number): Entity {
    return _entities.find(entity => entity.id === id)
  }

  create(data: EntityCreateData): Entity {
    const {
      name
    } = data

    const id = Math.floor(Math.random() * 999);

    _entities.push({
      id,
      name
    })
    
    this.logger.sendMessage(`Created entity ${name} at list`)

    return this.getById(id)
  }
}