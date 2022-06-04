import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesUpdateWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesUpdateWithoutFK_CourseInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorsOnCoursesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesUpdateWithoutFK_CourseInput, {
    nullable: false
  })
  data!: ProfessorsOnCoursesUpdateWithoutFK_CourseInput;
}
