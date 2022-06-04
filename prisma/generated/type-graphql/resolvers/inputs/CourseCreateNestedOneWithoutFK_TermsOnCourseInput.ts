import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateOrConnectWithoutFK_TermsOnCourseInput";
import { CourseCreateWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateWithoutFK_TermsOnCourseInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedOneWithoutFK_TermsOnCourseInput", {
  isAbstract: true
})
export class CourseCreateNestedOneWithoutFK_TermsOnCourseInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  create?: CourseCreateWithoutFK_TermsOnCourseInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutFK_TermsOnCourseInput | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;
}
