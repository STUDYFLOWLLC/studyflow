import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateWithoutFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FolderID?: string | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput | undefined;
}
