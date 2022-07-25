import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput";
import { CourseOnTermCreateWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateWithoutCourseOnTermAutomationInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput", {
  isAbstract: true
})
export class CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput {
  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutCourseOnTermAutomationInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseOnTermWhereUniqueInput | undefined;
}
