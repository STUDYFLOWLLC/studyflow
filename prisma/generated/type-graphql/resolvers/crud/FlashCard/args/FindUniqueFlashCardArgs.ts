import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardWhereUniqueInput } from "../../../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFlashcardArgs {
  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardWhereUniqueInput;
}
