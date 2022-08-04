import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput";
import { FlashcardStackUpdateWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackUpdateWithoutFK_FlashcardStackReviewsInput";

@TypeGraphQL.InputType("FlashcardStackUpsertWithoutFK_FlashcardStackReviewsInput", {
  isAbstract: true
})
export class FlashcardStackUpsertWithoutFK_FlashcardStackReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardStackUpdateWithoutFK_FlashcardStackReviewsInput, {
    nullable: false
  })
  update!: FlashcardStackUpdateWithoutFK_FlashcardStackReviewsInput;

  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput, {
    nullable: false
  })
  create!: FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput;
}
