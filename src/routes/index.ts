import {Router} from 'express'
import indexRoute from './pages/index.routes'

const routes = Router()

routes.use("/", indexRoute)

export default routes