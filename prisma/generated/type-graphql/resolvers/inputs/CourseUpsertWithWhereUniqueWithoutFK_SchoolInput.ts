import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutFK_SchoolInput } from "../inputs/CourseCreateWithoutFK_SchoolInput";
import { CourseUpdateWithoutFK_SchoolInput } from "../inputs/CourseUpdateWithoutFK_SchoolInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpsertWithWhereUniqueWithoutFK_SchoolInput", {
  isAbstract: true
})
export class CourseUpsertWithWhereUniqueWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutFK_SchoolInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutFK_SchoolInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_SchoolInput, {
    nullable: false
  })
  create!: CourseCreateWithoutFK_SchoolInput;
}
