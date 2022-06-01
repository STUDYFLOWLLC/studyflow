import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateWithoutFlashCardsInput } from "../inputs/FlashCardStackCreateWithoutFlashCardsInput";
import { FlashCardStackUpdateWithoutFlashCardsInput } from "../inputs/FlashCardStackUpdateWithoutFlashCardsInput";

@TypeGraphQL.InputType("FlashCardStackUpsertWithoutFlashCardsInput", {
  isAbstract: true
})
export class FlashCardStackUpsertWithoutFlashCardsInput {
  @TypeGraphQL.Field(_type => FlashCardStackUpdateWithoutFlashCardsInput, {
    nullable: false
  })
  update!: FlashCardStackUpdateWithoutFlashCardsInput;

  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFlashCardsInput, {
    nullable: false
  })
  create!: FlashCardStackCreateWithoutFlashCardsInput;
}
