import express, { Application } from 'express'
import mongoose from 'mongoose'
import routes from './routes'
class App {
  private server: Application 
  constructor(){
    this.server = express()
    this.routes()
    this.database()
  }

  private routes(): void {
    this.server.use(routes)
  }

  private database(): void {
    // mongoose.connect('')
  }
}