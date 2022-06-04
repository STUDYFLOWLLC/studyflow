import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesUpdateManyWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesUpdateManyWithoutFK_ProfessorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProfessorUpdateInput", {
  isAbstract: true
})
export class ProfessorUpdateInput {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesUpdateManyWithoutFK_ProfessorInput, {
    nullable: true
  })
  FK_Courses?: ProfessorsOnCoursesUpdateManyWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;
}
