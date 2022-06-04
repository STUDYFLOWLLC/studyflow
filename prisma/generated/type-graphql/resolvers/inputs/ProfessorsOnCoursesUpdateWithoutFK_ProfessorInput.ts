import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneRequiredWithoutFK_ProfessorsInput } from "../inputs/CourseUpdateOneRequiredWithoutFK_ProfessorsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesUpdateWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneRequiredWithoutFK_ProfessorsInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateOneRequiredWithoutFK_ProfessorsInput | undefined;
}
