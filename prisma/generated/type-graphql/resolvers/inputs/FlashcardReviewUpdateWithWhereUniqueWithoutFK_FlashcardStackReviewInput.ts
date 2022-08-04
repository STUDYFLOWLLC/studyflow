import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewUpdateWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewUpdateWithoutFK_FlashcardStackReviewInput";
import { FlashcardReviewWhereUniqueInput } from "../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackReviewInput", {
  isAbstract: true
})
export class FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackReviewInput {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardReviewUpdateWithoutFK_FlashcardStackReviewInput, {
    nullable: false
  })
  data!: FlashcardReviewUpdateWithoutFK_FlashcardStackReviewInput;
}
