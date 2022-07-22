import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FolderID?: string | undefined;

  @TypeGraphQL.Field(_type => AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  FK_Automation?: AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput | undefined;
}
