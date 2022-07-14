import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewAvgOrderByAggregateInput } from "../inputs/FlowViewAvgOrderByAggregateInput";
import { FlowViewCountOrderByAggregateInput } from "../inputs/FlowViewCountOrderByAggregateInput";
import { FlowViewMaxOrderByAggregateInput } from "../inputs/FlowViewMaxOrderByAggregateInput";
import { FlowViewMinOrderByAggregateInput } from "../inputs/FlowViewMinOrderByAggregateInput";
import { FlowViewSumOrderByAggregateInput } from "../inputs/FlowViewSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlowViewOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlowViewOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlowViewID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlowViewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlowViewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FlowViewAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlowViewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlowViewMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FlowViewSumOrderByAggregateInput | undefined;
}
