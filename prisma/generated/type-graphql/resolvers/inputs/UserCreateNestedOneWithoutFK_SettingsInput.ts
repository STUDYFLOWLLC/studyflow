import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_SettingsInput } from "../inputs/UserCreateOrConnectWithoutFK_SettingsInput";
import { UserCreateWithoutFK_SettingsInput } from "../inputs/UserCreateWithoutFK_SettingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_SettingsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_SettingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_SettingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_SettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_SettingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_SettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
