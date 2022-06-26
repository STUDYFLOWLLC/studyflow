import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorScalarWhereInput } from "../inputs/ProfessorScalarWhereInput";
import { ProfessorUpdateManyMutationInput } from "../inputs/ProfessorUpdateManyMutationInput";

@TypeGraphQL.InputType("ProfessorUpdateManyWithWhereWithoutFK_SchoolInput", {
  isAbstract: true
})
export class ProfessorUpdateManyWithWhereWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => ProfessorScalarWhereInput, {
    nullable: false
  })
  where!: ProfessorScalarWhereInput;

  @TypeGraphQL.Field(_type => ProfessorUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProfessorUpdateManyMutationInput;
}
