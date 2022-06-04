import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseRelationFilter } from "../inputs/CourseRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProfessorRelationFilter } from "../inputs/ProfessorRelationFilter";

@TypeGraphQL.InputType("ProfessorsOnCoursesWhereInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesWhereInput {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereInput], {
    nullable: true
  })
  AND?: ProfessorsOnCoursesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereInput], {
    nullable: true
  })
  OR?: ProfessorsOnCoursesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereInput], {
    nullable: true
  })
  NOT?: ProfessorsOnCoursesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ProfessorsOnCoursesID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CourseRelationFilter, {
    nullable: true
  })
  FK_Course?: CourseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_CourseID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ProfessorRelationFilter, {
    nullable: true
  })
  FK_Professor?: ProfessorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_ProfessorID?: IntFilter | undefined;
}
