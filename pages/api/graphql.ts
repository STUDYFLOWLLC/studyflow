import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import { createContext } from '../../graphql/context'
import { buildSchema } from 'type-graphql'
import { resolvers } from '../../prisma/generated/type-graphql'
import Cors from 'micro-cors'
import path from 'path'

const buildServer = async () => {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false
  })

  const apolloServer = new ApolloServer({
    schema,
    context: createContext
  })

  return apolloServer
}

const cors = new Cors()

export default cors(async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  const apolloServer = await buildServer()

  await apolloServer.start()
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})

export const config = {
  api: {
    bodyParser: false
  }
}
