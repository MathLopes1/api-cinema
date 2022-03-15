import {Router} from "express";
import { CinemaController } from "../app/controllers/CinemaController";

const Cinemacontrollers = new CinemaController;
const router = Router();

router.post('/categories', Cinemacontrollers.create)
router.get('/categories', Cinemacontrollers.find)
router.get('/categories/:id', Cinemacontrollers.findId)
router.put('/categories/:id', Cinemacontrollers.updated)
router.delete('/categories/:id', Cinemacontrollers.delete)

export {router};