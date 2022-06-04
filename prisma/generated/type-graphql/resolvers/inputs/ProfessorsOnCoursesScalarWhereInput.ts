import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ProfessorsOnCoursesScalarWhereInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarWhereInput], {
    nullable: true
  })
  AND?: ProfessorsOnCoursesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarWhereInput], {
    nullable: true
  })
  OR?: ProfessorsOnCoursesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarWhereInput], {
    nullable: true
  })
  NOT?: ProfessorsOnCoursesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ProfessorsOnCoursesID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_CourseID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_ProfessorID?: IntFilter | undefined;
}
