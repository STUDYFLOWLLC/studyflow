import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackWhereUniqueInput } from "../../../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFlashcardStackArgs {
  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackWhereUniqueInput;
}
