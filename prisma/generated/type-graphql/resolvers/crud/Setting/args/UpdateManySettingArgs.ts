import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingUpdateManyMutationInput } from "../../../inputs/SettingUpdateManyMutationInput";
import { SettingWhereInput } from "../../../inputs/SettingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySettingArgs {
  @TypeGraphQL.Field(_type => SettingUpdateManyMutationInput, {
    nullable: false
  })
  data!: SettingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SettingWhereInput, {
    nullable: true
  })
  where?: SettingWhereInput | undefined;
}
