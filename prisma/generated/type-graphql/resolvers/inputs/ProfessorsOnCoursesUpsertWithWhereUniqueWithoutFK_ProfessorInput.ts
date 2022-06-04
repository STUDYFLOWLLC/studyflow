import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesCreateWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorsOnCoursesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput, {
    nullable: false
  })
  update!: ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateWithoutFK_ProfessorInput, {
    nullable: false
  })
  create!: ProfessorsOnCoursesCreateWithoutFK_ProfessorInput;
}
