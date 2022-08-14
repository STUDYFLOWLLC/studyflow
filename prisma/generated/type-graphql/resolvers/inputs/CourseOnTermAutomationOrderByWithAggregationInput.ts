import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationAvgOrderByAggregateInput } from "../inputs/CourseOnTermAutomationAvgOrderByAggregateInput";
import { CourseOnTermAutomationCountOrderByAggregateInput } from "../inputs/CourseOnTermAutomationCountOrderByAggregateInput";
import { CourseOnTermAutomationMaxOrderByAggregateInput } from "../inputs/CourseOnTermAutomationMaxOrderByAggregateInput";
import { CourseOnTermAutomationMinOrderByAggregateInput } from "../inputs/CourseOnTermAutomationMinOrderByAggregateInput";
import { CourseOnTermAutomationSumOrderByAggregateInput } from "../inputs/CourseOnTermAutomationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOnTermAutomationOrderByWithAggregationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CourseOnTermAutomationID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FolderID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultVisibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultRepetitionType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_AutomationID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_CourseOnTermID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CourseOnTermAutomationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CourseOnTermAutomationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CourseOnTermAutomationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CourseOnTermAutomationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CourseOnTermAutomationSumOrderByAggregateInput | undefined;
}
