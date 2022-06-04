import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateNestedManyWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesCreateNestedManyWithoutFK_ProfessorInput";

@TypeGraphQL.InputType("ProfessorCreateInput", {
  isAbstract: true
})
export class ProfessorCreateInput {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateNestedManyWithoutFK_ProfessorInput, {
    nullable: true
  })
  FK_Courses?: ProfessorsOnCoursesCreateNestedManyWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;
}
