import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateWithoutFK_ProfessorInput } from "../inputs/CourseUpdateWithoutFK_ProfessorInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateWithWhereUniqueWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class CourseUpdateWithWhereUniqueWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutFK_ProfessorInput, {
    nullable: false
  })
  data!: CourseUpdateWithoutFK_ProfessorInput;
}
