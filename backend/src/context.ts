import { PrismaClient } from "@prisma/client"
export const prisma = new PrismaClient()

export interface Context {
    prisma: PrismaClient
}

export const context: Context = {
    prisma,
}