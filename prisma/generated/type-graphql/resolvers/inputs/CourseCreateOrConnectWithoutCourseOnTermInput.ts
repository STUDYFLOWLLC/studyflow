import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutCourseOnTermInput } from "../inputs/CourseCreateWithoutCourseOnTermInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutCourseOnTermInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutCourseOnTermInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutCourseOnTermInput, {
    nullable: false
  })
  create!: CourseCreateWithoutCourseOnTermInput;
}
