import express, { Application } from 'express'
import mongoose from 'mongoose'
import path from 'path'
import exphbs from 'express-handlebars'
import routes from './routes'
class App {
  public server: Application 
  constructor(){
    this.server = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  private middlewares(): void {
    this.server.use('/public', express.static(path.join(__dirname, 'public' )))
    this.server.engine('.hbs', exphbs({extname: '.hbs'}))
    this.server.set('view engine', '.hbs')
  }

  private routes(): void {
    this.server.use(routes)
  }

  private database(): void {
    // mongoose.connect('')
  }
}

export default new App().server