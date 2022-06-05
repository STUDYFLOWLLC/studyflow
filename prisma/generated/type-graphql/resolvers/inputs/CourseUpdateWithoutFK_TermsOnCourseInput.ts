import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProfessorUpdateOneWithoutFK_CoursesInput } from "../inputs/ProfessorUpdateOneWithoutFK_CoursesInput";
import { SchoolUpdateOneWithoutFK_CourseInput } from "../inputs/SchoolUpdateOneWithoutFK_CourseInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseUpdateWithoutFK_TermsOnCourseInput", {
  isAbstract: true
})
export class CourseUpdateWithoutFK_TermsOnCourseInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  IsOfficial?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Term?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutFK_CourseInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpdateOneWithoutFK_CoursesInput, {
    nullable: true
  })
  FK_Professor?: ProfessorUpdateOneWithoutFK_CoursesInput | undefined;
}
