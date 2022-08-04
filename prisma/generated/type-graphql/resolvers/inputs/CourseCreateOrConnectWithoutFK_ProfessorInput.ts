import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutFK_ProfessorInput } from "../inputs/CourseCreateWithoutFK_ProfessorInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_ProfessorInput, {
    nullable: false
  })
  create!: CourseCreateWithoutFK_ProfessorInput;
}
