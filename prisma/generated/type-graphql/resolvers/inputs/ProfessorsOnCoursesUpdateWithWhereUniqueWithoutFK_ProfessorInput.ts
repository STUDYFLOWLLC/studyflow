import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorsOnCoursesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput, {
    nullable: false
  })
  data!: ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput;
}
