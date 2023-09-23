import expess, { Application, urlencoded } from 'express'
import cors from 'cors'
const app: Application = expess()
app.use(expess.json())
app.use(cors())
app.use(urlencoded({ extended: true }))
export default app
