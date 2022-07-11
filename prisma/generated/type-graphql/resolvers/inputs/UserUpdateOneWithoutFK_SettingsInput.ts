import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_SettingsInput } from "../inputs/UserCreateOrConnectWithoutFK_SettingsInput";
import { UserCreateWithoutFK_SettingsInput } from "../inputs/UserCreateWithoutFK_SettingsInput";
import { UserUpdateWithoutFK_SettingsInput } from "../inputs/UserUpdateWithoutFK_SettingsInput";
import { UserUpsertWithoutFK_SettingsInput } from "../inputs/UserUpsertWithoutFK_SettingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_SettingsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_SettingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_SettingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_SettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_SettingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_SettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_SettingsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_SettingsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_SettingsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_SettingsInput | undefined;
}
