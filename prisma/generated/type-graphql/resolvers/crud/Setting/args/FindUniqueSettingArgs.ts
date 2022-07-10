import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingWhereUniqueInput } from "../../../inputs/SettingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSettingArgs {
  @TypeGraphQL.Field(_type => SettingWhereUniqueInput, {
    nullable: false
  })
  where!: SettingWhereUniqueInput;
}
