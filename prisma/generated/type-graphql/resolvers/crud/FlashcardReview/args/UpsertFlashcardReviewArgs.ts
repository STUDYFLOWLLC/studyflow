import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardReviewCreateInput } from "../../../inputs/FlashcardReviewCreateInput";
import { FlashcardReviewUpdateInput } from "../../../inputs/FlashcardReviewUpdateInput";
import { FlashcardReviewWhereUniqueInput } from "../../../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlashcardReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateInput, {
    nullable: false
  })
  create!: FlashcardReviewCreateInput;

  @TypeGraphQL.Field(_type => FlashcardReviewUpdateInput, {
    nullable: false
  })
  update!: FlashcardReviewUpdateInput;
}
