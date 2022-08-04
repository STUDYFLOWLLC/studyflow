import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorWhereInput } from "../../../inputs/ProfessorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProfessorArgs {
  @TypeGraphQL.Field(_type => ProfessorWhereInput, {
    nullable: true
  })
  where?: ProfessorWhereInput | undefined;
}
