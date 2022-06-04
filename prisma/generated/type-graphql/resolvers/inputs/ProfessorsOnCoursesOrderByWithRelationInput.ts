import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOrderByWithRelationInput } from "../inputs/CourseOrderByWithRelationInput";
import { ProfessorOrderByWithRelationInput } from "../inputs/ProfessorOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfessorsOnCoursesOrderByWithRelationInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProfessorsOnCoursesID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOrderByWithRelationInput, {
    nullable: true
  })
  FK_Course?: CourseOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_CourseID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfessorOrderByWithRelationInput, {
    nullable: true
  })
  FK_Professor?: ProfessorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_ProfessorID?: "asc" | "desc" | undefined;
}
