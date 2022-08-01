import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackCreateWithoutFK_FlashcardsInput";
import { FlashcardStackUpdateWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackUpdateWithoutFK_FlashcardsInput";

@TypeGraphQL.InputType("FlashcardStackUpsertWithoutFK_FlashcardsInput", {
  isAbstract: true
})
export class FlashcardStackUpsertWithoutFK_FlashcardsInput {
  @TypeGraphQL.Field(_type => FlashcardStackUpdateWithoutFK_FlashcardsInput, {
    nullable: false
  })
  update!: FlashcardStackUpdateWithoutFK_FlashcardsInput;

  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_FlashcardsInput, {
    nullable: false
  })
  create!: FlashcardStackCreateWithoutFK_FlashcardsInput;
}
