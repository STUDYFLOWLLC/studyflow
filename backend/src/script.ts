import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
  const newLink = await prisma.link.create({
    data: {
      description: "test descriptoin",
      url: "test url",
    },
  })
  const allLinks = await prisma.link.findMany()
  console.log(allLinks)
}

main().finally(async () => {
  await prisma.$disconnect()
})
