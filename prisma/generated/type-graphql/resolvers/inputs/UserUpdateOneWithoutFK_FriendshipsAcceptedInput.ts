import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput";
import { UserCreateWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserCreateWithoutFK_FriendshipsAcceptedInput";
import { UserUpdateWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserUpdateWithoutFK_FriendshipsAcceptedInput";
import { UserUpsertWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserUpsertWithoutFK_FriendshipsAcceptedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_FriendshipsAcceptedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_FriendshipsAcceptedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FriendshipsAcceptedInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FriendshipsAcceptedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FriendshipsAcceptedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_FriendshipsAcceptedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_FriendshipsAcceptedInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FriendshipsAcceptedInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_FriendshipsAcceptedInput | undefined;
}
