import { Router } from 'express'

const indexRoute = Router()

indexRoute.get('/', (req, res)=> {
  res.render('home', {title: 'Candidatos Boa Vista - RR'})
})

export default indexRoute