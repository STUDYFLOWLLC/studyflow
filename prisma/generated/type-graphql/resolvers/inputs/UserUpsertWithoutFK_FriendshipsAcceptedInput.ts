import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserCreateWithoutFK_FriendshipsAcceptedInput";
import { UserUpdateWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserUpdateWithoutFK_FriendshipsAcceptedInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_FriendshipsAcceptedInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_FriendshipsAcceptedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FriendshipsAcceptedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_FriendshipsAcceptedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FriendshipsAcceptedInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FriendshipsAcceptedInput;
}
