import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutFK_ProfessorsInput } from "../inputs/CourseCreateWithoutFK_ProfessorsInput";
import { CourseUpdateWithoutFK_ProfessorsInput } from "../inputs/CourseUpdateWithoutFK_ProfessorsInput";

@TypeGraphQL.InputType("CourseUpsertWithoutFK_ProfessorsInput", {
  isAbstract: true
})
export class CourseUpsertWithoutFK_ProfessorsInput {
  @TypeGraphQL.Field(_type => CourseUpdateWithoutFK_ProfessorsInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutFK_ProfessorsInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_ProfessorsInput, {
    nullable: false
  })
  create!: CourseCreateWithoutFK_ProfessorsInput;
}
