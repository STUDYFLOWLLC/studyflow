import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackReviewWhereInput } from "../../../inputs/FlashcardStackReviewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlashcardStackReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereInput, {
    nullable: true
  })
  where?: FlashcardStackReviewWhereInput | undefined;
}
