import '../typeorm'
import cors from 'cors'
import express from 'express'
import routes from '../routes'
import { handleError } from '../middlewares/HandleError'

const app = express()

app.use(cors())
app.use(routes)
app.use(handleError)
app.use(express.json())

app.listen(3333, () => console.log('server started on port 3333'))
