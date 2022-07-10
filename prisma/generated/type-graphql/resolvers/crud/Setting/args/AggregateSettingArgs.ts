import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingOrderByWithRelationInput } from "../../../inputs/SettingOrderByWithRelationInput";
import { SettingWhereInput } from "../../../inputs/SettingWhereInput";
import { SettingWhereUniqueInput } from "../../../inputs/SettingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSettingArgs {
  @TypeGraphQL.Field(_type => SettingWhereInput, {
    nullable: true
  })
  where?: SettingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SettingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
