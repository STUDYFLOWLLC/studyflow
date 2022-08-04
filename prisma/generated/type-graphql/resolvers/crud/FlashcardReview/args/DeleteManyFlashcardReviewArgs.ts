import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardReviewWhereInput } from "../../../inputs/FlashcardReviewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlashcardReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereInput, {
    nullable: true
  })
  where?: FlashcardReviewWhereInput | undefined;
}
