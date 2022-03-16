import { Category } from '../entities/Category'
import { CinemaRepository } from '../repository/CinemaRepository'
const CinemaRepositorys = new CinemaRepository()

type categoryRequest = {
    name: string;
    description: string;
};

export class CinemaService {
  async create ({ name, description }: categoryRequest): Promise<Category | Error> {
    const data = await CinemaRepositorys.create({ name, description })
    return data
  }

  async find () {
    const category = await CinemaRepositorys.find()
    return category
  }

  async findId (id: string): Promise <Category | Error> {
    const category = CinemaRepositorys.findId(id)

    if (!category) {
      return new Error('Category does not exists!')
    }

    return category
  }

  async updated (id: string, payload: Category): Promise <Category | Error> {
    const data = CinemaRepositorys.updated(id, payload)
    return data
  }

  async delete (id: string) {
    const data = CinemaRepositorys.delete(id)
    return data
  }
}
