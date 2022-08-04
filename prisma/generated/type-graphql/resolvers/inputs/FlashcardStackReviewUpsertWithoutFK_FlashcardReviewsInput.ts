import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput";
import { FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput";

@TypeGraphQL.InputType("FlashcardStackReviewUpsertWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardStackReviewUpsertWithoutFK_FlashcardReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput, {
    nullable: false
  })
  update!: FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput, {
    nullable: false
  })
  create!: FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput;
}
