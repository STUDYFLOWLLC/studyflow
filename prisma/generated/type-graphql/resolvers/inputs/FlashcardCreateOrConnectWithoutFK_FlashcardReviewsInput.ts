import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardCreateWithoutFK_FlashcardReviewsInput";
import { FlashcardWhereUniqueInput } from "../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardCreateWithoutFK_FlashcardReviewsInput, {
    nullable: false
  })
  create!: FlashcardCreateWithoutFK_FlashcardReviewsInput;
}
