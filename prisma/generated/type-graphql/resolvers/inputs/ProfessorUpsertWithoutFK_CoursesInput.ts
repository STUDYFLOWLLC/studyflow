import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateWithoutFK_CoursesInput } from "../inputs/ProfessorCreateWithoutFK_CoursesInput";
import { ProfessorUpdateWithoutFK_CoursesInput } from "../inputs/ProfessorUpdateWithoutFK_CoursesInput";

@TypeGraphQL.InputType("ProfessorUpsertWithoutFK_CoursesInput", {
  isAbstract: true
})
export class ProfessorUpsertWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => ProfessorUpdateWithoutFK_CoursesInput, {
    nullable: false
  })
  update!: ProfessorUpdateWithoutFK_CoursesInput;

  @TypeGraphQL.Field(_type => ProfessorCreateWithoutFK_CoursesInput, {
    nullable: false
  })
  create!: ProfessorCreateWithoutFK_CoursesInput;
}
