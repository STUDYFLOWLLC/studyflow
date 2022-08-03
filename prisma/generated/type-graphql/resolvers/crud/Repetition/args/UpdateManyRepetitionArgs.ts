import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepetitionUpdateManyMutationInput } from "../../../inputs/RepetitionUpdateManyMutationInput";
import { RepetitionWhereInput } from "../../../inputs/RepetitionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRepetitionArgs {
  @TypeGraphQL.Field(_type => RepetitionUpdateManyMutationInput, {
    nullable: false
  })
  data!: RepetitionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RepetitionWhereInput, {
    nullable: true
  })
  where?: RepetitionWhereInput | undefined;
}
