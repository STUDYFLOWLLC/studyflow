import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneRequiredWithoutFK_TermsOnCourseInput } from "../inputs/CourseUpdateOneRequiredWithoutFK_TermsOnCourseInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowUpdateManyWithoutFK_CourseOnTermInput } from "../inputs/FlowUpdateManyWithoutFK_CourseOnTermInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseOnTermUpdateWithoutFK_TermInput", {
  isAbstract: true
})
export class CourseOnTermUpdateWithoutFK_TermInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Color?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Nickname?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneRequiredWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateOneRequiredWithoutFK_TermsOnCourseInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowUpdateManyWithoutFK_CourseOnTermInput | undefined;
}