import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorWhereUniqueInput } from "../../../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProfessorArgs {
  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;
}
