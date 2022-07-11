import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingCreateInput } from "../../../inputs/SettingCreateInput";
import { SettingUpdateInput } from "../../../inputs/SettingUpdateInput";
import { SettingWhereUniqueInput } from "../../../inputs/SettingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSettingArgs {
  @TypeGraphQL.Field(_type => SettingWhereUniqueInput, {
    nullable: false
  })
  where!: SettingWhereUniqueInput;

  @TypeGraphQL.Field(_type => SettingCreateInput, {
    nullable: false
  })
  create!: SettingCreateInput;

  @TypeGraphQL.Field(_type => SettingUpdateInput, {
    nullable: false
  })
  update!: SettingUpdateInput;
}
