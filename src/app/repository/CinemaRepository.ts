import { getRepository } from 'typeorm'
import { Category } from '../entities/Category'

type categoryRequest = {
    name: string;
    description: string;
};

export class CinemaRepository {
  async create ({ name, description }: categoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category)
    await repo.findOne({ name })

    if (await repo.findOne({ name })) {
      return new Error('Category already exists')
    }

    const category = repo.create({
      name,
      description
    })

    await repo.save(category)
    return category
  }

  async find () {
    const repo = getRepository(Category)
    const category = repo.find()
    return category
  }

  async findId (id: string): Promise<Category> {
    const repo = getRepository(Category)
    const category = await repo.findOne(id)

    return category
  }

  async updated (id: string, payload: Category): Promise <Category | Error> {
    const repo = getRepository(Category)
    if (!(await repo.findOne(id))) {
      return new Error('Category does not exists!')
    }
    await repo.update(id, payload)
  }

  async delete (id: string) {
    const repo = getRepository(Category)
    if (!(await repo.findOne(id))) {
      return new Error('Category does not exists!')
    }
    await repo.delete(id)
  }
}
