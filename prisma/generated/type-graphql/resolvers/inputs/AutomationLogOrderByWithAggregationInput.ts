import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogAvgOrderByAggregateInput } from "../inputs/AutomationLogAvgOrderByAggregateInput";
import { AutomationLogCountOrderByAggregateInput } from "../inputs/AutomationLogCountOrderByAggregateInput";
import { AutomationLogMaxOrderByAggregateInput } from "../inputs/AutomationLogMaxOrderByAggregateInput";
import { AutomationLogMinOrderByAggregateInput } from "../inputs/AutomationLogMinOrderByAggregateInput";
import { AutomationLogSumOrderByAggregateInput } from "../inputs/AutomationLogSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AutomationLogOrderByWithAggregationInput", {
  isAbstract: true
})
export class AutomationLogOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  AutomationLogID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Success?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FileID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_CourseOnTermAutomationID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AutomationLogCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AutomationLogCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationLogAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AutomationLogAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationLogMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AutomationLogMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationLogMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AutomationLogMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationLogSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AutomationLogSumOrderByAggregateInput | undefined;
}
