import 'dotenv/config'                                    // 1
import { PrismaMariaDb } from '@prisma/adapter-mariadb'   // 2
import { PrismaClient } from '../generated/prisma/client.js' // 3

const adapter = new PrismaMariaDb(process.env.DATABASE_URL) // 4
const prisma = new PrismaClient({ adapter })               // 5

export default prisma                                      // 6