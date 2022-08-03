import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepetitionWhereUniqueInput } from "../../../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRepetitionArgs {
  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: false
  })
  where!: RepetitionWhereUniqueInput;
}
