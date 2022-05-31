import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateWithoutFK_CourseInput } from "../inputs/ProfessorCreateWithoutFK_CourseInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorCreateOrConnectWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorCreateOrConnectWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorCreateWithoutFK_CourseInput, {
    nullable: false
  })
  create!: ProfessorCreateWithoutFK_CourseInput;
}
