import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { createContext } from '../../graphql/context'
import { ServerResponse } from 'http'
import Cors from 'micro-cors'
import { resolvers } from '../../prisma/generated/type-graphql'
import { buildSchema } from 'type-graphql'

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

  const schema = await buildSchema({
    resolvers,
    validate: false,
  })

  const apolloServer = new ApolloServer({
    schema,
    context: createContext,
  })

  await apolloServer.start()
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
