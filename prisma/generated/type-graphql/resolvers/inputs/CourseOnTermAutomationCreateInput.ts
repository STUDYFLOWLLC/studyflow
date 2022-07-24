import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput";
import { AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput";
import { CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput";
import { FlowType } from "../../enums/FlowType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FolderID?: string | undefined;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: true
  })
  DefaultType?: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS" | undefined;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;

  @TypeGraphQL.Field(_type => AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput, {
    nullable: true
  })
  AutomationLog?: AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput | undefined;

  @TypeGraphQL.Field(_type => AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  FK_Automation?: AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput | undefined;
}