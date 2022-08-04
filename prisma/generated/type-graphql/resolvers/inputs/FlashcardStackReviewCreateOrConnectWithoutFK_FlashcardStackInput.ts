import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewCreateWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewWhereUniqueInput } from "../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  create!: FlashcardStackReviewCreateWithoutFK_FlashcardStackInput;
}
