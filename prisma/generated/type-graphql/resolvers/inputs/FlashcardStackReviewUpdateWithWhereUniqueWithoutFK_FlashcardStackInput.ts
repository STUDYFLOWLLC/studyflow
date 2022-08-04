import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewWhereUniqueInput } from "../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardStackReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  data!: FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput;
}
