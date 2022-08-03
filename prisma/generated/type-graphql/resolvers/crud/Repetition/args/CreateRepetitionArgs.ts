import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepetitionCreateInput } from "../../../inputs/RepetitionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRepetitionArgs {
  @TypeGraphQL.Field(_type => RepetitionCreateInput, {
    nullable: false
  })
  data!: RepetitionCreateInput;
}
