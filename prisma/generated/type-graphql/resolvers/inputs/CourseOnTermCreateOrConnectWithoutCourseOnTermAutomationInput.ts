import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateWithoutCourseOnTermAutomationInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput", {
  isAbstract: true
})
export class CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput {
  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutCourseOnTermAutomationInput, {
    nullable: false
  })
  create!: CourseOnTermCreateWithoutCourseOnTermAutomationInput;
}
