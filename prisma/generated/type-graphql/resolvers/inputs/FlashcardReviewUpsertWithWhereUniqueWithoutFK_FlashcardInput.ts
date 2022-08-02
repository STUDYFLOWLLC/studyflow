import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewCreateWithoutFK_FlashcardInput";
import { FlashcardReviewUpdateWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewUpdateWithoutFK_FlashcardInput";
import { FlashcardReviewWhereUniqueInput } from "../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardInput", {
  isAbstract: true
})
export class FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardInput {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardReviewUpdateWithoutFK_FlashcardInput, {
    nullable: false
  })
  update!: FlashcardReviewUpdateWithoutFK_FlashcardInput;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateWithoutFK_FlashcardInput, {
    nullable: false
  })
  create!: FlashcardReviewCreateWithoutFK_FlashcardInput;
}
