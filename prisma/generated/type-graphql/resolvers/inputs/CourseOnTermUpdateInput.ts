import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneWithoutFK_TermsOnCourseInput } from "../inputs/CourseUpdateOneWithoutFK_TermsOnCourseInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowUpdateManyWithoutCourseOnTermInput } from "../inputs/FlowUpdateManyWithoutCourseOnTermInput";
import { TermUpdateOneWithoutFK_CourseOnTermInput } from "../inputs/TermUpdateOneWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermUpdateInput", {
  isAbstract: true
})
export class CourseOnTermUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateOneWithoutFK_TermsOnCourseInput | undefined;

  @TypeGraphQL.Field(_type => TermUpdateOneWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Term?: TermUpdateOneWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateManyWithoutCourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowUpdateManyWithoutCourseOnTermInput | undefined;
}
