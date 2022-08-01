import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardReviewWhereUniqueInput } from "../../../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFlashcardReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardReviewWhereUniqueInput;
}
