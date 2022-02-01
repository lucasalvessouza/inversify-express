import express from "express";
import { TYPES } from "../../types";
import { container } from "../../wire";
import { CreateUseCaseInterface } from "./use_cases/create_use_case";
import { FindUseCaseInterface } from "./use_cases/find_use_case";
import { ListUseCaseInterface } from "./use_cases/list_use_case";


export const router = express.Router()

router.get('/', (req, res) => {
  const entityListUseCase = container.get<ListUseCaseInterface>(TYPES.EntityListUseCase)
  res.send(entityListUseCase.execute())
})

router.get('/:id', (req, res) => {
  const entityFindUseCase = container.get<FindUseCaseInterface>(TYPES.EntityFindUseCase)
  res.send(entityFindUseCase.execute({
    id: req.params.id
  }))
})

router.post('/', (req, res) => {
  const entityCreateUseCase = container.get<CreateUseCaseInterface>(TYPES.EntityCreateUseCase)
  console.log(req.body)
  res.send(entityCreateUseCase.execute(req.body))
})