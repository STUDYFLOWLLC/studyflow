import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateWithoutCourseOnTermAutomationInput";
import { CourseOnTermUpdateWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermUpdateWithoutCourseOnTermAutomationInput";

@TypeGraphQL.InputType("CourseOnTermUpsertWithoutCourseOnTermAutomationInput", {
  isAbstract: true
})
export class CourseOnTermUpsertWithoutCourseOnTermAutomationInput {
  @TypeGraphQL.Field(_type => CourseOnTermUpdateWithoutCourseOnTermAutomationInput, {
    nullable: false
  })
  update!: CourseOnTermUpdateWithoutCourseOnTermAutomationInput;

  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutCourseOnTermAutomationInput, {
    nullable: false
  })
  create!: CourseOnTermCreateWithoutCourseOnTermAutomationInput;
}
