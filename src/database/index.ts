import { createConnection } from 'typeorm'
class Connection {
  constructor () {
    this.connect()
  }

  private async connect (): Promise<void> {
    try {
      await createConnection()
      console.log('connected with the database')
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Connection()
