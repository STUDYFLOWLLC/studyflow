import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateWithoutFK_TermsOnCourseInput";
import { CourseUpdateWithoutFK_TermsOnCourseInput } from "../inputs/CourseUpdateWithoutFK_TermsOnCourseInput";

@TypeGraphQL.InputType("CourseUpsertWithoutFK_TermsOnCourseInput", {
  isAbstract: true
})
export class CourseUpsertWithoutFK_TermsOnCourseInput {
  @TypeGraphQL.Field(_type => CourseUpdateWithoutFK_TermsOnCourseInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutFK_TermsOnCourseInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_TermsOnCourseInput, {
    nullable: false
  })
  create!: CourseCreateWithoutFK_TermsOnCourseInput;
}
