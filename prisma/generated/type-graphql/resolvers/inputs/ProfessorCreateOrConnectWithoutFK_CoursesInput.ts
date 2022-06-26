import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateWithoutFK_CoursesInput } from "../inputs/ProfessorCreateWithoutFK_CoursesInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorCreateOrConnectWithoutFK_CoursesInput", {
  isAbstract: true
})
export class ProfessorCreateOrConnectWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorCreateWithoutFK_CoursesInput, {
    nullable: false
  })
  create!: ProfessorCreateWithoutFK_CoursesInput;
}
