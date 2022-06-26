import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateWithoutFK_ProfessorInput } from "../inputs/SchoolCreateWithoutFK_ProfessorInput";
import { SchoolUpdateWithoutFK_ProfessorInput } from "../inputs/SchoolUpdateWithoutFK_ProfessorInput";

@TypeGraphQL.InputType("SchoolUpsertWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class SchoolUpsertWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => SchoolUpdateWithoutFK_ProfessorInput, {
    nullable: false
  })
  update!: SchoolUpdateWithoutFK_ProfessorInput;

  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_ProfessorInput, {
    nullable: false
  })
  create!: SchoolCreateWithoutFK_ProfessorInput;
}
