import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorCreateInput } from "../../../inputs/ProfessorCreateInput";
import { ProfessorUpdateInput } from "../../../inputs/ProfessorUpdateInput";
import { ProfessorWhereUniqueInput } from "../../../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProfessorArgs {
  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorCreateInput, {
    nullable: false
  })
  create!: ProfessorCreateInput;

  @TypeGraphQL.Field(_type => ProfessorUpdateInput, {
    nullable: false
  })
  update!: ProfessorUpdateInput;
}
