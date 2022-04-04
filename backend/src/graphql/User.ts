import { mutationType, objectType, queryType } from "nexus"
//import { Visibility } from "./Enums"

//TODO: implement visibility enum

export const User = objectType({
    name: "User",
    definition(t) {
        t.model.UserID()
        t.model.Email()
        t.model.UID()
        t.model.DisplayName()
        t.model.ProfilePictureLink()
        /* t.model.Flows()
        t.list.field("Flows", {
            type: "Flow",
            resolve(parent, args, context) {
                return context.prisma.User
                    .findUnique({ where: { id: parent.id }})
                    .Flows()
            }
        }) */
    }
})

export const UserQuery = queryType({
    definition(t) {
        t.crud.user()
        t.crud.users({
            ordering: true
        })
        t.crud.flow()
        t.crud.flows({
            filtering: true
        })
    }
})

export const UserMutation = mutationType({
    definition(t) {
        t.crud.createOneUser()
        t.crud.deleteOneUser()
    }
})