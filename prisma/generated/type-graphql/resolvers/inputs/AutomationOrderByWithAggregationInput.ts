import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationAvgOrderByAggregateInput } from "../inputs/AutomationAvgOrderByAggregateInput";
import { AutomationCountOrderByAggregateInput } from "../inputs/AutomationCountOrderByAggregateInput";
import { AutomationMaxOrderByAggregateInput } from "../inputs/AutomationMaxOrderByAggregateInput";
import { AutomationMinOrderByAggregateInput } from "../inputs/AutomationMinOrderByAggregateInput";
import { AutomationSumOrderByAggregateInput } from "../inputs/AutomationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AutomationOrderByWithAggregationInput", {
  isAbstract: true
})
export class AutomationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  AutomationID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RefreshToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AutomationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AutomationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AutomationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AutomationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AutomationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AutomationSumOrderByAggregateInput | undefined;
}
