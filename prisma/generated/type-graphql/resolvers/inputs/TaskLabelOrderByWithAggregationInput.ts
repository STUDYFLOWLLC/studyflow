import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelAvgOrderByAggregateInput } from "../inputs/TaskLabelAvgOrderByAggregateInput";
import { TaskLabelCountOrderByAggregateInput } from "../inputs/TaskLabelCountOrderByAggregateInput";
import { TaskLabelMaxOrderByAggregateInput } from "../inputs/TaskLabelMaxOrderByAggregateInput";
import { TaskLabelMinOrderByAggregateInput } from "../inputs/TaskLabelMinOrderByAggregateInput";
import { TaskLabelSumOrderByAggregateInput } from "../inputs/TaskLabelSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TaskLabelOrderByWithAggregationInput", {
  isAbstract: true
})
export class TaskLabelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TaskLabelID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Label?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_TaskID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TaskLabelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TaskLabelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskLabelAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TaskLabelAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskLabelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TaskLabelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskLabelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TaskLabelMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskLabelSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TaskLabelSumOrderByAggregateInput | undefined;
}
