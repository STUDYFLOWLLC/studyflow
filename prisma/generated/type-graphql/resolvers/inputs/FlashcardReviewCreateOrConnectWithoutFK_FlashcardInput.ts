import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewCreateWithoutFK_FlashcardInput";
import { FlashcardReviewWhereUniqueInput } from "../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput", {
  isAbstract: true
})
export class FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateWithoutFK_FlashcardInput, {
    nullable: false
  })
  create!: FlashcardReviewCreateWithoutFK_FlashcardInput;
}
