import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingUpdateInput } from "../../../inputs/SettingUpdateInput";
import { SettingWhereUniqueInput } from "../../../inputs/SettingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSettingArgs {
  @TypeGraphQL.Field(_type => SettingUpdateInput, {
    nullable: false
  })
  data!: SettingUpdateInput;

  @TypeGraphQL.Field(_type => SettingWhereUniqueInput, {
    nullable: false
  })
  where!: SettingWhereUniqueInput;
}
