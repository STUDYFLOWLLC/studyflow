import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingWhereInput } from "../../../inputs/SettingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySettingArgs {
  @TypeGraphQL.Field(_type => SettingWhereInput, {
    nullable: true
  })
  where?: SettingWhereInput | undefined;
}
