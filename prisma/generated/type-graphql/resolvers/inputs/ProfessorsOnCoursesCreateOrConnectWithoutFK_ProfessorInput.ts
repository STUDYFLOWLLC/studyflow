import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesCreateWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorsOnCoursesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateWithoutFK_ProfessorInput, {
    nullable: false
  })
  create!: ProfessorsOnCoursesCreateWithoutFK_ProfessorInput;
}
