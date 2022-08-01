import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardCreateWithoutFK_FlashcardReviewsInput";
import { FlashcardUpdateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardUpdateWithoutFK_FlashcardReviewsInput";

@TypeGraphQL.InputType("FlashcardUpsertWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardUpsertWithoutFK_FlashcardReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardUpdateWithoutFK_FlashcardReviewsInput, {
    nullable: false
  })
  update!: FlashcardUpdateWithoutFK_FlashcardReviewsInput;

  @TypeGraphQL.Field(_type => FlashcardCreateWithoutFK_FlashcardReviewsInput, {
    nullable: false
  })
  create!: FlashcardCreateWithoutFK_FlashcardReviewsInput;
}
