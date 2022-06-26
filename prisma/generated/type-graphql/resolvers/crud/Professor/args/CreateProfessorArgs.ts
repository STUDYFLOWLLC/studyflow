import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorCreateInput } from "../../../inputs/ProfessorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProfessorArgs {
  @TypeGraphQL.Field(_type => ProfessorCreateInput, {
    nullable: false
  })
  data!: ProfessorCreateInput;
}
