import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolAvgOrderByAggregateInput } from "../inputs/SchoolAvgOrderByAggregateInput";
import { SchoolCountOrderByAggregateInput } from "../inputs/SchoolCountOrderByAggregateInput";
import { SchoolMaxOrderByAggregateInput } from "../inputs/SchoolMaxOrderByAggregateInput";
import { SchoolMinOrderByAggregateInput } from "../inputs/SchoolMinOrderByAggregateInput";
import { SchoolSumOrderByAggregateInput } from "../inputs/SchoolSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SchoolOrderByWithAggregationInput", {
  isAbstract: true
})
export class SchoolOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SchoolID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  HasClassSupport?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchoolCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SchoolCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchoolAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SchoolAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchoolMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SchoolMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchoolMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SchoolMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchoolSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SchoolSumOrderByAggregateInput | undefined;
}
