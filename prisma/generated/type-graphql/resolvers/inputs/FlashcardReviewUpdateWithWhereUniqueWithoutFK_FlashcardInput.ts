import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewUpdateWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewUpdateWithoutFK_FlashcardInput";
import { FlashcardReviewWhereUniqueInput } from "../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardInput", {
  isAbstract: true
})
export class FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardInput {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardReviewUpdateWithoutFK_FlashcardInput, {
    nullable: false
  })
  data!: FlashcardReviewUpdateWithoutFK_FlashcardInput;
}
