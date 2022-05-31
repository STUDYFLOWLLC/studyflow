import 'reflect-metadata'
import { ApolloServer, Config } from 'apollo-server-micro'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { createContext } from 'graphql/context'
import { ServerResponse } from 'http'
import Cors from 'micro-cors'
import path from 'path'
import { resolvers } from 'prisma/generated/type-graphql'
import { buildSchema } from 'type-graphql'

const buildServer = async () => {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false,
  })

  const apolloServer = new ApolloServer({
    schema,
    context: createContext,
    cors: {
      origin: [
        'https://studyflow.vercel.app',
        'https://studio.apollographql.com',
      ],
    },
  } as Config)

  return apolloServer
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cors = new (Cors as any)({
  origin: 'https://studio.apollographql.com',
  allowCredentials: true,
})

export default cors(async (req: MicroRequest, res: ServerResponse) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  const apolloServer = await buildServer()
  await apolloServer.start()
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
