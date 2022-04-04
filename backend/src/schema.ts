import { makeExecutableSchema } from "@graphql-tools/schema"
import type { GraphQLContext } from "./context"
import { Users, Visibility } from "@prisma/client"

const typeDefinitions = /* GraphQL */ `
  type Query {
    users: Users!
  }

  type Mutation {
    createUser(
      Email: String!, UID: String!, DisplayName: String!, 
      ProfilePictureLink: String?, DefaultVisibility: Visbility?
    ) : Users!
  }
`

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: async (parent: unknown, args: {}, context: GraphQLContext) => {
      return context.prisma.link.findMany()
    },
    link: async (
      parent: unknown,
      args: { id: string },
      context: GraphQLContext
    ) => {
      return context.prisma.link.findUnique({
        where: { id: parseInt(args.id) },
      })
    },
    comment: async (
      parent: unknown,
      args: { id: string },
      context: GraphQLContext
    ) => {
      return context.prisma.comment.findUnique({
        where: { id: parseInt(args.id) },
      })
    },
  },
  Link: {
    id: (parent: Link) => parent.id,
    description: (parent: Link) => parent.description,
    url: (parent: Link) => parent.url,
    comments: (parent: Link, args: {}, context: GraphQLContext) => {
      return context.prisma.comment.findMany({
        where: { linkId: parent.id },
      })
    },
  },
  Comment: {
    link: (parent: Comment, args: {}, context: GraphQLContext) => {
      return parent.linkId === null
        ? null
        : context.prisma.link.findUnique({
            where: { id: parent.linkId },
          })
    },
  },
  Mutation: {
    postLink: async (
      parent: unknown,
      args: { description: string; url: string },
      context: GraphQLContext
    ) => {
      const newLink = await context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      })
      return newLink
    },
    postCommentOnLink: async (
      parent: unknown,
      args: { linkId: string; body: string },
      context: GraphQLContext
    ) => {
      const newComment = await context.prisma.comment.create({
        data: {
          linkId: parseInt(args.linkId),
          body: args.body,
        },
      })
      return newComment
    },
  },
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions, Users],
})
