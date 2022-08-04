import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput";
import { FlashcardReviewWhereUniqueInput } from "../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput", {
  isAbstract: true
})
export class FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput, {
    nullable: false
  })
  create!: FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput;
}
