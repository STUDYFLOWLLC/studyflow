import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput";
import { UserCreateWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserCreateWithoutFK_FriendshipsAcceptedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FriendshipsAcceptedInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FriendshipsAcceptedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
