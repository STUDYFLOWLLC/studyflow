import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneRequiredWithoutFK_ProfessorsInput } from "../inputs/CourseUpdateOneRequiredWithoutFK_ProfessorsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProfessorUpdateOneRequiredWithoutFK_CoursesInput } from "../inputs/ProfessorUpdateOneRequiredWithoutFK_CoursesInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesUpdateInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneRequiredWithoutFK_ProfessorsInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateOneRequiredWithoutFK_ProfessorsInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpdateOneRequiredWithoutFK_CoursesInput, {
    nullable: true
  })
  FK_Professor?: ProfessorUpdateOneRequiredWithoutFK_CoursesInput | undefined;
}
