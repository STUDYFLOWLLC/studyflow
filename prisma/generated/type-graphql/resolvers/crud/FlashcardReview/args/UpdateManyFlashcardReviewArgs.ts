import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardReviewUpdateManyMutationInput } from "../../../inputs/FlashcardReviewUpdateManyMutationInput";
import { FlashcardReviewWhereInput } from "../../../inputs/FlashcardReviewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlashcardReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashcardReviewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlashcardReviewWhereInput, {
    nullable: true
  })
  where?: FlashcardReviewWhereInput | undefined;
}
