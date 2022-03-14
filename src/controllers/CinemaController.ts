import { Request, Response} from "express";
import {CinemaService } from "../services/CinemaServices";
const CinemaServices = new CinemaService();

export class CinemaController {

    async create(request: Request, response: Response ){
        const {name, description} = request.body;

        const result = await CinemaServices.create({name, description});

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        return response.json(result)
    }

    async find(request: Request, response: Response){
        const categories = await CinemaServices.find();
        return response.status(200).json(categories);
    }

    async findId(request: Request, response: Response){
        const { id } = request.params
        const result = await CinemaServices.findId(id)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        return response.status(200).json(result); 
    }

    async updated (request: Request, response: Response){
        const { id } = request.params
        const payload = request.body 
        const result = await CinemaServices.updated(id, payload)
        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200).json("Updated Sucess")
    }

    async delete(request: Request, response: Response){
        const { id } = request.params
        const result = await CinemaServices.delete(id)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        return response.status(204).end();
    }
}
