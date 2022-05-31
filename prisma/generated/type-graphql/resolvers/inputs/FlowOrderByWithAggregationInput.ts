import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowAvgOrderByAggregateInput } from "../inputs/FlowAvgOrderByAggregateInput";
import { FlowCountOrderByAggregateInput } from "../inputs/FlowCountOrderByAggregateInput";
import { FlowMaxOrderByAggregateInput } from "../inputs/FlowMaxOrderByAggregateInput";
import { FlowMinOrderByAggregateInput } from "../inputs/FlowMinOrderByAggregateInput";
import { FlowSumOrderByAggregateInput } from "../inputs/FlowSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlowOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlowOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Visibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlowCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlowCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FlowAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlowMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlowMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FlowSumOrderByAggregateInput | undefined;
}
