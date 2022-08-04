import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput";
import { UserCreateWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserCreateWithoutFK_FriendshipsInitiatedInput";
import { UserUpdateWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserUpdateWithoutFK_FriendshipsInitiatedInput";
import { UserUpsertWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserUpsertWithoutFK_FriendshipsInitiatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_FriendshipsInitiatedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_FriendshipsInitiatedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FriendshipsInitiatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FriendshipsInitiatedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_FriendshipsInitiatedInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_FriendshipsInitiatedInput | undefined;
}
