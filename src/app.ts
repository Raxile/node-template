import 'dotenv/config'
import express, { Express, Request, Response } from 'express'

const app: Express = express()

const port = process.env.PORT
app.get('/', (req: Request, res: Response) => {
    res.send('hello world2!')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
