import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepetitionUpdateInput } from "../../../inputs/RepetitionUpdateInput";
import { RepetitionWhereUniqueInput } from "../../../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRepetitionArgs {
  @TypeGraphQL.Field(_type => RepetitionUpdateInput, {
    nullable: false
  })
  data!: RepetitionUpdateInput;

  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: false
  })
  where!: RepetitionWhereUniqueInput;
}
