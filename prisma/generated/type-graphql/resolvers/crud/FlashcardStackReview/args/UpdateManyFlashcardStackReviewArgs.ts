import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackReviewUpdateManyMutationInput } from "../../../inputs/FlashcardStackReviewUpdateManyMutationInput";
import { FlashcardStackReviewWhereInput } from "../../../inputs/FlashcardStackReviewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlashcardStackReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashcardStackReviewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereInput, {
    nullable: true
  })
  where?: FlashcardStackReviewWhereInput | undefined;
}
