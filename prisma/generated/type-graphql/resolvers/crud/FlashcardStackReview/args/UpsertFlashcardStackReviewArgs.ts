import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackReviewCreateInput } from "../../../inputs/FlashcardStackReviewCreateInput";
import { FlashcardStackReviewUpdateInput } from "../../../inputs/FlashcardStackReviewUpdateInput";
import { FlashcardStackReviewWhereUniqueInput } from "../../../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlashcardStackReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateInput, {
    nullable: false
  })
  create!: FlashcardStackReviewCreateInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateInput, {
    nullable: false
  })
  update!: FlashcardStackReviewUpdateInput;
}
