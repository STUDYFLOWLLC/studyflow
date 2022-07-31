import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput";
import { UserCreateWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserCreateWithoutFK_FriendshipsInitiatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FriendshipsInitiatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
