import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingAvgOrderByAggregateInput } from "../inputs/SettingAvgOrderByAggregateInput";
import { SettingCountOrderByAggregateInput } from "../inputs/SettingCountOrderByAggregateInput";
import { SettingMaxOrderByAggregateInput } from "../inputs/SettingMaxOrderByAggregateInput";
import { SettingMinOrderByAggregateInput } from "../inputs/SettingMinOrderByAggregateInput";
import { SettingSumOrderByAggregateInput } from "../inputs/SettingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingOrderByWithAggregationInput", {
  isAbstract: true
})
export class SettingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SettingID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  HasSeenWelcomeMessage?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  LastSeenWelcomeMessageAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SettingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SettingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SettingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SettingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SettingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SettingSumOrderByAggregateInput | undefined;
}
