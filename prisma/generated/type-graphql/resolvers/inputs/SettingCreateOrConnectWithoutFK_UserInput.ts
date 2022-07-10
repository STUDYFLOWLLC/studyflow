import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCreateWithoutFK_UserInput } from "../inputs/SettingCreateWithoutFK_UserInput";
import { SettingWhereUniqueInput } from "../inputs/SettingWhereUniqueInput";

@TypeGraphQL.InputType("SettingCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class SettingCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => SettingWhereUniqueInput, {
    nullable: false
  })
  where!: SettingWhereUniqueInput;

  @TypeGraphQL.Field(_type => SettingCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: SettingCreateWithoutFK_UserInput;
}
