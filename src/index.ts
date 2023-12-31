import { PrismaClient } from '@prisma/client'
import app from './app'

const port = process.env.PORT || 5000

const prisma = new PrismaClient()

const main = async () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
main()
