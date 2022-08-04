import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackReviewWhereUniqueInput } from "../../../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteFlashcardStackReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackReviewWhereUniqueInput;
}
