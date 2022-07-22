import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogUpdateManyWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogUpdateManyWithoutFK_CourseOnTermAutomationInput";
import { AutomationUpdateOneWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationUpdateOneWithoutCourseOnTermAutomationsInput";
import { CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FolderID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AutomationLogUpdateManyWithoutFK_CourseOnTermAutomationInput, {
    nullable: true
  })
  AutomationLog?: AutomationLogUpdateManyWithoutFK_CourseOnTermAutomationInput | undefined;

  @TypeGraphQL.Field(_type => AutomationUpdateOneWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  FK_Automation?: AutomationUpdateOneWithoutCourseOnTermAutomationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput | undefined;
}
