import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput";
import { AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput";
import { CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateInput {
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

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput | undefined;
}
