import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProfessorUpdateOneRequiredWithoutFK_CoursesInput } from "../inputs/ProfessorUpdateOneRequiredWithoutFK_CoursesInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesUpdateWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesUpdateWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpdateOneRequiredWithoutFK_CoursesInput, {
    nullable: true
  })
  FK_Professor?: ProfessorUpdateOneRequiredWithoutFK_CoursesInput | undefined;
}
