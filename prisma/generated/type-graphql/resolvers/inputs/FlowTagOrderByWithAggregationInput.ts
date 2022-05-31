import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagAvgOrderByAggregateInput } from "../inputs/FlowTagAvgOrderByAggregateInput";
import { FlowTagCountOrderByAggregateInput } from "../inputs/FlowTagCountOrderByAggregateInput";
import { FlowTagMaxOrderByAggregateInput } from "../inputs/FlowTagMaxOrderByAggregateInput";
import { FlowTagMinOrderByAggregateInput } from "../inputs/FlowTagMinOrderByAggregateInput";
import { FlowTagSumOrderByAggregateInput } from "../inputs/FlowTagSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlowTagOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlowTagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlowTagID?: "asc" | "desc" | undefined;

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
  Public?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlowTagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlowTagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FlowTagAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlowTagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlowTagMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FlowTagSumOrderByAggregateInput | undefined;
}
