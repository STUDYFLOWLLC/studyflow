import { ApolloServer } from 'apollo-server-micro'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { GraphQLSchema } from 'graphql'
import { ServerResponse } from 'http'
import Cors from 'micro-cors'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { createContext } from '../../graphql/context'
import { resolvers } from '../../prisma/generated/type-graphql'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cors = new (Cors as any)({
  origin: 'https://studio.apollographql.com',
  allowCredentials: true,
})

let schema: GraphQLSchema
const builder = async () => {
  const schema2 = await buildSchema({
    resolvers,
    validate: false,
  })
  schema = schema2
  return schema
}

let apolloServer: ApolloServer
const starter = async (req: MicroRequest, res: ServerResponse) => {
  const schema2 = await builder()
  const apolloServer2 = new ApolloServer({
    schema: schema2,
    context: () => createContext(req, res),
  })
  apolloServer = apolloServer2
  await apolloServer.start()
  return apolloServer
}

export default cors(async (req: MicroRequest, res: ServerResponse) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  // create the server if we haven't already (should only happen once)
  if (!apolloServer) {
    const built = await starter(req, res)
    return built.createHandler({ path: '/api/graphql' })(req, res)
  }
  // otherwise, just serve the existing server
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
