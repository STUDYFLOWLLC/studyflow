import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserCreateWithoutFK_FriendshipsInitiatedInput";
import { UserUpdateWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserUpdateWithoutFK_FriendshipsInitiatedInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_FriendshipsInitiatedInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_FriendshipsInitiatedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FriendshipsInitiatedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_FriendshipsInitiatedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FriendshipsInitiatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FriendshipsInitiatedInput;
}
