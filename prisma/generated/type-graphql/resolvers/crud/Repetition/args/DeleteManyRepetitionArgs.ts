import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepetitionWhereInput } from "../../../inputs/RepetitionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRepetitionArgs {
  @TypeGraphQL.Field(_type => RepetitionWhereInput, {
    nullable: true
  })
  where?: RepetitionWhereInput | undefined;
}
