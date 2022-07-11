import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCreateOrConnectWithoutFK_UserInput } from "../inputs/SettingCreateOrConnectWithoutFK_UserInput";
import { SettingCreateWithoutFK_UserInput } from "../inputs/SettingCreateWithoutFK_UserInput";
import { SettingWhereUniqueInput } from "../inputs/SettingWhereUniqueInput";

@TypeGraphQL.InputType("SettingCreateNestedOneWithoutFK_UserInput", {
  isAbstract: true
})
export class SettingCreateNestedOneWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => SettingCreateWithoutFK_UserInput, {
    nullable: true
  })
  create?: SettingCreateWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SettingCreateOrConnectWithoutFK_UserInput, {
    nullable: true
  })
  connectOrCreate?: SettingCreateOrConnectWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SettingWhereUniqueInput, {
    nullable: true
  })
  connect?: SettingWhereUniqueInput | undefined;
}
