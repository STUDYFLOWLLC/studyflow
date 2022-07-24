import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationUpdateOneWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationUpdateOneWithoutCourseOnTermAutomationsInput";
import { CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput";
import { EnumFlowTypeFieldUpdateOperationsInput } from "../inputs/EnumFlowTypeFieldUpdateOperationsInput";
import { EnumVisibilityFieldUpdateOperationsInput } from "../inputs/EnumVisibilityFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateWithoutAutomationLogInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateWithoutAutomationLogInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FolderID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumFlowTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  DefaultType?: EnumFlowTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFieldUpdateOperationsInput, {
    nullable: true
  })
  DefaultVisibility?: EnumVisibilityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AutomationUpdateOneWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  FK_Automation?: AutomationUpdateOneWithoutCourseOnTermAutomationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput | undefined;
}
