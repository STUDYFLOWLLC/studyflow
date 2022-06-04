import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorAvgOrderByAggregateInput } from "../inputs/ProfessorAvgOrderByAggregateInput";
import { ProfessorCountOrderByAggregateInput } from "../inputs/ProfessorCountOrderByAggregateInput";
import { ProfessorMaxOrderByAggregateInput } from "../inputs/ProfessorMaxOrderByAggregateInput";
import { ProfessorMinOrderByAggregateInput } from "../inputs/ProfessorMinOrderByAggregateInput";
import { ProfessorSumOrderByAggregateInput } from "../inputs/ProfessorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfessorOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProfessorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProfessorID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfessorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProfessorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProfessorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProfessorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProfessorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProfessorSumOrderByAggregateInput | undefined;
}
