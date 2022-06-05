import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateWithoutFK_TermsOnCourseInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutFK_TermsOnCourseInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutFK_TermsOnCourseInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_TermsOnCourseInput, {
    nullable: false
  })
  create!: CourseCreateWithoutFK_TermsOnCourseInput;
}
