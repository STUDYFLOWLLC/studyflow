import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackReviewUpdateInput } from "../../../inputs/FlashcardStackReviewUpdateInput";
import { FlashcardStackReviewWhereUniqueInput } from "../../../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlashcardStackReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateInput, {
    nullable: false
  })
  data!: FlashcardStackReviewUpdateInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackReviewWhereUniqueInput;
}
