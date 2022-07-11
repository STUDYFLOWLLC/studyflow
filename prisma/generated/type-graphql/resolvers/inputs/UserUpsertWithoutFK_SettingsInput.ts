import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_SettingsInput } from "../inputs/UserCreateWithoutFK_SettingsInput";
import { UserUpdateWithoutFK_SettingsInput } from "../inputs/UserUpdateWithoutFK_SettingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_SettingsInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_SettingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_SettingsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_SettingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_SettingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_SettingsInput;
}
