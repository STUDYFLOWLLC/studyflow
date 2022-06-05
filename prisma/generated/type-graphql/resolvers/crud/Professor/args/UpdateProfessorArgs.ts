import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorUpdateInput } from "../../../inputs/ProfessorUpdateInput";
import { ProfessorWhereUniqueInput } from "../../../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProfessorArgs {
  @TypeGraphQL.Field(_type => ProfessorUpdateInput, {
    nullable: false
  })
  data!: ProfessorUpdateInput;

  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;
}
