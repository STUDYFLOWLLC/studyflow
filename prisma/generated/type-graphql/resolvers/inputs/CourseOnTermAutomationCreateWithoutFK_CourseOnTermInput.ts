import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput";
import { AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FolderID?: string | undefined;

  @TypeGraphQL.Field(_type => AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput, {
    nullable: true
  })
  AutomationLog?: AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput | undefined;

  @TypeGraphQL.Field(_type => AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  FK_Automation?: AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput | undefined;
}
