import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOrderByRelationAggregateInput } from "../inputs/CourseOrderByRelationAggregateInput";
import { SchoolOrderByWithRelationInput } from "../inputs/SchoolOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfessorOrderByWithRelationInput", {
  isAbstract: true
})
export class ProfessorOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProfessorID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Courses?: CourseOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchoolOrderByWithRelationInput, {
    nullable: true
  })
  FK_School?: SchoolOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_SchoolID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Email?: "asc" | "desc" | undefined;
}
