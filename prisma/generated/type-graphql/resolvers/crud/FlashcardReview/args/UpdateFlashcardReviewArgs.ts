import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardReviewUpdateInput } from "../../../inputs/FlashcardReviewUpdateInput";
import { FlashcardReviewWhereUniqueInput } from "../../../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlashcardReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardReviewUpdateInput, {
    nullable: false
  })
  data!: FlashcardReviewUpdateInput;

  @TypeGraphQL.Field(_type => FlashcardReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardReviewWhereUniqueInput;
}
