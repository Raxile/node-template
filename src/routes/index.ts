import { Router, Request, Response } from 'express'

const mainRoutes = Router()

mainRoutes.use('/', (req: Request, res: Response) => {
    res.send('hello world!')
})

export default mainRoutes
