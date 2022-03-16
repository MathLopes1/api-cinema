import express, { Express } from 'express'
import { router } from './routes/routes'
import './database/index.ts'

class App {
    readonly express: Express

    constructor () {
      this.express = express()

      this.middlewares()
      this.routes()
    }

    middlewares (): void {
      this.express.use(express.json())
      this.express.use(express.urlencoded({ extended: true }))
    }

    routes (): void {
      this.express.use(router)
    }
}

export default new App().express
