import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingOrderByWithAggregationInput } from "../../../inputs/SettingOrderByWithAggregationInput";
import { SettingScalarWhereWithAggregatesInput } from "../../../inputs/SettingScalarWhereWithAggregatesInput";
import { SettingWhereInput } from "../../../inputs/SettingWhereInput";
import { SettingScalarFieldEnum } from "../../../../enums/SettingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySettingArgs {
  @TypeGraphQL.Field(_type => SettingWhereInput, {
    nullable: true
  })
  where?: SettingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SettingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"SettingID" | "HasSeenWelcomeMessage" | "LastSeenWelcomeMessageAt" | "FK_UserID">;

  @TypeGraphQL.Field(_type => SettingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SettingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
