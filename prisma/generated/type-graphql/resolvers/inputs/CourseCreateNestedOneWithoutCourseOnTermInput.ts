import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutCourseOnTermInput } from "../inputs/CourseCreateOrConnectWithoutCourseOnTermInput";
import { CourseCreateWithoutCourseOnTermInput } from "../inputs/CourseCreateWithoutCourseOnTermInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedOneWithoutCourseOnTermInput", {
  isAbstract: true
})
export class CourseCreateNestedOneWithoutCourseOnTermInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutCourseOnTermInput, {
    nullable: true
  })
  create?: CourseCreateWithoutCourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutCourseOnTermInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutCourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;
}
