import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateOrConnectWithoutFK_TermsOnCourseInput";
import { CourseCreateWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateWithoutFK_TermsOnCourseInput";
import { CourseUpdateWithoutFK_TermsOnCourseInput } from "../inputs/CourseUpdateWithoutFK_TermsOnCourseInput";
import { CourseUpsertWithoutFK_TermsOnCourseInput } from "../inputs/CourseUpsertWithoutFK_TermsOnCourseInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateOneWithoutFK_TermsOnCourseInput", {
  isAbstract: true
})
export class CourseUpdateOneWithoutFK_TermsOnCourseInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  create?: CourseCreateWithoutFK_TermsOnCourseInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutFK_TermsOnCourseInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpsertWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  upsert?: CourseUpsertWithoutFK_TermsOnCourseInput | undefined;

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

  @TypeGraphQL.Field(_type => CourseUpdateWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  update?: CourseUpdateWithoutFK_TermsOnCourseInput | undefined;
}
