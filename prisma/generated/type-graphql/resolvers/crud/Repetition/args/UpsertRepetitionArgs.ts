import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepetitionCreateInput } from "../../../inputs/RepetitionCreateInput";
import { RepetitionUpdateInput } from "../../../inputs/RepetitionUpdateInput";
import { RepetitionWhereUniqueInput } from "../../../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRepetitionArgs {
  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: false
  })
  where!: RepetitionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RepetitionCreateInput, {
    nullable: false
  })
  create!: RepetitionCreateInput;

  @TypeGraphQL.Field(_type => RepetitionUpdateInput, {
    nullable: false
  })
  update!: RepetitionUpdateInput;
}
