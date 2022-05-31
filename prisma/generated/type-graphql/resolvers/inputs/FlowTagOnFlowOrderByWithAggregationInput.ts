import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowAvgOrderByAggregateInput } from "../inputs/FlowTagOnFlowAvgOrderByAggregateInput";
import { FlowTagOnFlowCountOrderByAggregateInput } from "../inputs/FlowTagOnFlowCountOrderByAggregateInput";
import { FlowTagOnFlowMaxOrderByAggregateInput } from "../inputs/FlowTagOnFlowMaxOrderByAggregateInput";
import { FlowTagOnFlowMinOrderByAggregateInput } from "../inputs/FlowTagOnFlowMinOrderByAggregateInput";
import { FlowTagOnFlowSumOrderByAggregateInput } from "../inputs/FlowTagOnFlowSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlowTagOnFlowOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlowTagOnFlowOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlowTagOnFlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  HOLDER?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlowTagID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlowTagOnFlowCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FlowTagOnFlowAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlowTagOnFlowMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlowTagOnFlowMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FlowTagOnFlowSumOrderByAggregateInput | undefined;
}
