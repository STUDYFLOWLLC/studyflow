import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationUpdateOneWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationUpdateOneWithoutCourseOnTermAutomationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FolderID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AutomationUpdateOneWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  FK_Automation?: AutomationUpdateOneWithoutCourseOnTermAutomationsInput | undefined;
}
