import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingCreateInput } from "../../../inputs/SettingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSettingArgs {
  @TypeGraphQL.Field(_type => SettingCreateInput, {
    nullable: false
  })
  data!: SettingCreateInput;
}
