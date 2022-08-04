import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewCreateWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewWhereUniqueInput } from "../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardStackReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  update!: FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  create!: FlashcardStackReviewCreateWithoutFK_FlashcardStackInput;
}
