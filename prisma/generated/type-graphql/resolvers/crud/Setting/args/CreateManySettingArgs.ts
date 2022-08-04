import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingCreateManyInput } from "../../../inputs/SettingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySettingArgs {
  @TypeGraphQL.Field(_type => [SettingCreateManyInput], {
    nullable: false
  })
  data!: SettingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
