import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput", {
  isAbstract: true
})
export class FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput, {
    nullable: false
  })
  create!: FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput;
}
