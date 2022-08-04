import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_SettingsInput } from "../inputs/UserCreateWithoutFK_SettingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_SettingsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_SettingsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_SettingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_SettingsInput;
}
