import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermAvgOrderByAggregateInput } from "../inputs/TermAvgOrderByAggregateInput";
import { TermCountOrderByAggregateInput } from "../inputs/TermCountOrderByAggregateInput";
import { TermMaxOrderByAggregateInput } from "../inputs/TermMaxOrderByAggregateInput";
import { TermMinOrderByAggregateInput } from "../inputs/TermMinOrderByAggregateInput";
import { TermSumOrderByAggregateInput } from "../inputs/TermSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TermOrderByWithAggregationInput", {
  isAbstract: true
})
export class TermOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermStartDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermEndDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TermCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TermCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TermAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TermAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TermMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TermMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TermMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TermMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TermSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TermSumOrderByAggregateInput | undefined;
}
