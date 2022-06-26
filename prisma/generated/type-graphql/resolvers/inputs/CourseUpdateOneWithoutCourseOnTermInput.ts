import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutCourseOnTermInput } from "../inputs/CourseCreateOrConnectWithoutCourseOnTermInput";
import { CourseCreateWithoutCourseOnTermInput } from "../inputs/CourseCreateWithoutCourseOnTermInput";
import { CourseUpdateWithoutCourseOnTermInput } from "../inputs/CourseUpdateWithoutCourseOnTermInput";
import { CourseUpsertWithoutCourseOnTermInput } from "../inputs/CourseUpsertWithoutCourseOnTermInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateOneWithoutCourseOnTermInput", {
  isAbstract: true
})
export class CourseUpdateOneWithoutCourseOnTermInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutCourseOnTermInput, {
    nullable: true
  })
  create?: CourseCreateWithoutCourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutCourseOnTermInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutCourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpsertWithoutCourseOnTermInput, {
    nullable: true
  })
  upsert?: CourseUpsertWithoutCourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutCourseOnTermInput, {
    nullable: true
  })
  update?: CourseUpdateWithoutCourseOnTermInput | undefined;
}
