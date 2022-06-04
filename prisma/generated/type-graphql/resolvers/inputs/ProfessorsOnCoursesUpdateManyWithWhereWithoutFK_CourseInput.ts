import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesScalarWhereInput } from "../inputs/ProfessorsOnCoursesScalarWhereInput";
import { ProfessorsOnCoursesUpdateManyMutationInput } from "../inputs/ProfessorsOnCoursesUpdateManyMutationInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesScalarWhereInput, {
    nullable: false
  })
  where!: ProfessorsOnCoursesScalarWhereInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProfessorsOnCoursesUpdateManyMutationInput;
}
