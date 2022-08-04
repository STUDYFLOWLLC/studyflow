import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput";
import { FlashcardStackReviewWhereUniqueInput } from "../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput, {
    nullable: false
  })
  create!: FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput;
}
