import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserCreateWithoutFK_FriendshipsAcceptedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FriendshipsAcceptedInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FriendshipsAcceptedInput;
}
