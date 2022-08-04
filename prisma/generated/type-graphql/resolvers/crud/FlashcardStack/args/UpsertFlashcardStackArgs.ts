import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackCreateInput } from "../../../inputs/FlashcardStackCreateInput";
import { FlashcardStackUpdateInput } from "../../../inputs/FlashcardStackUpdateInput";
import { FlashcardStackWhereUniqueInput } from "../../../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlashcardStackArgs {
  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackCreateInput, {
    nullable: false
  })
  create!: FlashcardStackCreateInput;

  @TypeGraphQL.Field(_type => FlashcardStackUpdateInput, {
    nullable: false
  })
  update!: FlashcardStackUpdateInput;
}
