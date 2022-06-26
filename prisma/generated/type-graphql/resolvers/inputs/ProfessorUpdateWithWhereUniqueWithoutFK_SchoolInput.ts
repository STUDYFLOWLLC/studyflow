import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorUpdateWithoutFK_SchoolInput } from "../inputs/ProfessorUpdateWithoutFK_SchoolInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorUpdateWithWhereUniqueWithoutFK_SchoolInput", {
  isAbstract: true
})
export class ProfessorUpdateWithWhereUniqueWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorUpdateWithoutFK_SchoolInput, {
    nullable: false
  })
  data!: ProfessorUpdateWithoutFK_SchoolInput;
}
