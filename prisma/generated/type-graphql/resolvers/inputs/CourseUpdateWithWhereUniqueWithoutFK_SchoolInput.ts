import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateWithoutFK_SchoolInput } from "../inputs/CourseUpdateWithoutFK_SchoolInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateWithWhereUniqueWithoutFK_SchoolInput", {
  isAbstract: true
})
export class CourseUpdateWithWhereUniqueWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutFK_SchoolInput, {
    nullable: false
  })
  data!: CourseUpdateWithoutFK_SchoolInput;
}
