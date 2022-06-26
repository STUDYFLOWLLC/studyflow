import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutCourseOnTermInput } from "../inputs/CourseCreateWithoutCourseOnTermInput";
import { CourseUpdateWithoutCourseOnTermInput } from "../inputs/CourseUpdateWithoutCourseOnTermInput";

@TypeGraphQL.InputType("CourseUpsertWithoutCourseOnTermInput", {
  isAbstract: true
})
export class CourseUpsertWithoutCourseOnTermInput {
  @TypeGraphQL.Field(_type => CourseUpdateWithoutCourseOnTermInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutCourseOnTermInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutCourseOnTermInput, {
    nullable: false
  })
  create!: CourseCreateWithoutCourseOnTermInput;
}
