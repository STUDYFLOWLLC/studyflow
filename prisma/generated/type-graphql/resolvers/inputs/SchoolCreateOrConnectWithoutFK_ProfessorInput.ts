import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateWithoutFK_ProfessorInput } from "../inputs/SchoolCreateWithoutFK_ProfessorInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolCreateOrConnectWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class SchoolCreateOrConnectWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: false
  })
  where!: SchoolWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_ProfessorInput, {
    nullable: false
  })
  create!: SchoolCreateWithoutFK_ProfessorInput;
}
