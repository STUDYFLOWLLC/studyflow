import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProfessorsOnCoursesUpdateManyWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesUpdateManyWithoutFK_CourseInput";
import { SchoolUpdateOneWithoutFK_CourseInput } from "../inputs/SchoolUpdateOneWithoutFK_CourseInput";

@TypeGraphQL.InputType("CourseUpdateWithoutFK_TermsOnCourseInput", {
  isAbstract: true
})
export class CourseUpdateWithoutFK_TermsOnCourseInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutFK_CourseInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesUpdateManyWithoutFK_CourseInput, {
    nullable: true
  })
  FK_Professors?: ProfessorsOnCoursesUpdateManyWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  IsOfficial?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: NullableStringFieldUpdateOperationsInput | undefined;
}
