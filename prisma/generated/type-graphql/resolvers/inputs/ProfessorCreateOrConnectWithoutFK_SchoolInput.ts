import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateWithoutFK_SchoolInput } from "../inputs/ProfessorCreateWithoutFK_SchoolInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorCreateOrConnectWithoutFK_SchoolInput", {
  isAbstract: true
})
export class ProfessorCreateOrConnectWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorCreateWithoutFK_SchoolInput, {
    nullable: false
  })
  create!: ProfessorCreateWithoutFK_SchoolInput;
}
