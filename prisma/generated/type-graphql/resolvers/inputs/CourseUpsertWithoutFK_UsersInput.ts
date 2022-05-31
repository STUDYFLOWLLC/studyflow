import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutFK_UsersInput } from "../inputs/CourseCreateWithoutFK_UsersInput";
import { CourseUpdateWithoutFK_UsersInput } from "../inputs/CourseUpdateWithoutFK_UsersInput";

@TypeGraphQL.InputType("CourseUpsertWithoutFK_UsersInput", {
  isAbstract: true
})
export class CourseUpsertWithoutFK_UsersInput {
  @TypeGraphQL.Field(_type => CourseUpdateWithoutFK_UsersInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutFK_UsersInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_UsersInput, {
    nullable: false
  })
  create!: CourseCreateWithoutFK_UsersInput;
}
