import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCreateWithoutFK_UserInput } from "../inputs/SettingCreateWithoutFK_UserInput";
import { SettingUpdateWithoutFK_UserInput } from "../inputs/SettingUpdateWithoutFK_UserInput";

@TypeGraphQL.InputType("SettingUpsertWithoutFK_UserInput", {
  isAbstract: true
})
export class SettingUpsertWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => SettingUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: SettingUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => SettingCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: SettingCreateWithoutFK_UserInput;
}
