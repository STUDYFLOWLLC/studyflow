import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserCreateWithoutFK_FriendshipsInitiatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FriendshipsInitiatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FriendshipsInitiatedInput;
}
