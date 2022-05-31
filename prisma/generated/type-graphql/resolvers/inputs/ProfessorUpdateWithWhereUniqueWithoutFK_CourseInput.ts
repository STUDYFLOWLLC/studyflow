import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorUpdateWithoutFK_CourseInput } from "../inputs/ProfessorUpdateWithoutFK_CourseInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorUpdateWithWhereUniqueWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorUpdateWithWhereUniqueWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorUpdateWithoutFK_CourseInput, {
    nullable: false
  })
  data!: ProfessorUpdateWithoutFK_CourseInput;
}
