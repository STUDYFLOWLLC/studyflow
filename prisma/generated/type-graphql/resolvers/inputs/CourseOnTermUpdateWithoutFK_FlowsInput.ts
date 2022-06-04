import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneRequiredWithoutFK_TermsOnCourseInput } from "../inputs/CourseUpdateOneRequiredWithoutFK_TermsOnCourseInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TermUpdateOneRequiredWithoutFK_CourseOnTermInput } from "../inputs/TermUpdateOneRequiredWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermUpdateWithoutFK_FlowsInput", {
  isAbstract: true
})
export class CourseOnTermUpdateWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneRequiredWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateOneRequiredWithoutFK_TermsOnCourseInput | undefined;

  @TypeGraphQL.Field(_type => TermUpdateOneRequiredWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Term?: TermUpdateOneRequiredWithoutFK_CourseOnTermInput | undefined;
}
