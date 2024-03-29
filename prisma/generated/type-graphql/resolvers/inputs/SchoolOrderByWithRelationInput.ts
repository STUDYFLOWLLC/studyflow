import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOrderByRelationAggregateInput } from "../inputs/CourseOrderByRelationAggregateInput";
import { ProfessorOrderByRelationAggregateInput } from "../inputs/ProfessorOrderByRelationAggregateInput";
import { TermOrderByRelationAggregateInput } from "../inputs/TermOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SchoolOrderByWithRelationInput", {
  isAbstract: true
})
export class SchoolOrderByWithRelationInput {
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
  SearchIndex?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Course?: CourseOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_User?: UserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Professor?: ProfessorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TermOrderByRelationAggregateInput, {
    nullable: true
  })
  Term?: TermOrderByRelationAggregateInput | undefined;
}
