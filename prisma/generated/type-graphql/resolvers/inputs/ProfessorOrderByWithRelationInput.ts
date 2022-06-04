import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesOrderByRelationAggregateInput } from "../inputs/ProfessorsOnCoursesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfessorOrderByWithRelationInput", {
  isAbstract: true
})
export class ProfessorOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProfessorID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Courses?: ProfessorsOnCoursesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;
}
