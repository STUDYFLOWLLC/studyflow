import { User } from "nexus-prisma"
import { mutationType, objectType, queryType } from "nexus"

//TODO: implement visibility enum

export const UserModel = objectType({
  name: User.$name,
  definition(t) {
    t.field(User.UserID)
    t.field(User.Email)
    t.field(User.UID)
    t.field(User.DisplayName)
    t.field(User.ProfilePictureLink)
    t.field(User.DefaultVisibility)
    t.field(User.Flows)
    /* t.model.Flows()
        t.list.field("Flows", {
            type: "Flow",
            resolve(parent, args, context) {
                return context.prisma.User
                    .findUnique({ where: { id: parent.id }})
                    .Flows()
            }
        }) */
  },
})

export const UserQuery = queryType({
  definition(t) {
    t.list.field("users", {
      type: "User",
      resolve(_, __, context) {
        return context.prisma.user.findMany()
      },
    })
  },
})

export const UserMutation = mutationType({
  definition(t) {},
})
