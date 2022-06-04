import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermOrderByRelationAggregateInput } from "../inputs/CourseOnTermOrderByRelationAggregateInput";
import { ProfessorsOnCoursesOrderByRelationAggregateInput } from "../inputs/ProfessorsOnCoursesOrderByRelationAggregateInput";
import { SchoolOrderByWithRelationInput } from "../inputs/SchoolOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOrderByWithRelationInput", {
  isAbstract: true
})
export class CourseOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CourseID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchoolOrderByWithRelationInput, {
    nullable: true
  })
  FK_School?: SchoolOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_SchoolID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Professors?: ProfessorsOnCoursesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_TermsOnCourse?: CourseOnTermOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  IsOfficial?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;
}
