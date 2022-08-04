import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackReviewCreateInput } from "../../../inputs/FlashcardStackReviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFlashcardStackReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateInput, {
    nullable: false
  })
  data!: FlashcardStackReviewCreateInput;
}
