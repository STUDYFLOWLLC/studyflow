import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorUpdateManyMutationInput } from "../../../inputs/ProfessorUpdateManyMutationInput";
import { ProfessorWhereInput } from "../../../inputs/ProfessorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProfessorArgs {
  @TypeGraphQL.Field(_type => ProfessorUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProfessorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProfessorWhereInput, {
    nullable: true
  })
  where?: ProfessorWhereInput | undefined;
}
