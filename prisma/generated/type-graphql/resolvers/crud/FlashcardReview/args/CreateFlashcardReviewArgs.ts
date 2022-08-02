import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardReviewCreateInput } from "../../../inputs/FlashcardReviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFlashcardReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardReviewCreateInput, {
    nullable: false
  })
  data!: FlashcardReviewCreateInput;
}
