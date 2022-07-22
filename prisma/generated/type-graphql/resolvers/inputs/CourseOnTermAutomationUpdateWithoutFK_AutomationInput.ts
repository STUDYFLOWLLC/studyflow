import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateWithoutFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FolderID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput | undefined;
}
