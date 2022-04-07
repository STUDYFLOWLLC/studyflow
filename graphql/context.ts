import { PrismaClient } from '@prisma/client'
import prisma from './prisma'

export type Context = {
  prisma: PrismaClient
}

export async function createContext(req: any, res: any): Promise<Context> {
  return {
    prisma
  }
}
