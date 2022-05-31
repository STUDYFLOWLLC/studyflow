import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackCreateWithoutFK_FlashcardsInput";
import { FlashCardStackUpdateWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackUpdateWithoutFK_FlashcardsInput";

@TypeGraphQL.InputType("FlashCardStackUpsertWithoutFK_FlashcardsInput", {
  isAbstract: true
})
export class FlashCardStackUpsertWithoutFK_FlashcardsInput {
  @TypeGraphQL.Field(_type => FlashCardStackUpdateWithoutFK_FlashcardsInput, {
    nullable: false
  })
  update!: FlashCardStackUpdateWithoutFK_FlashcardsInput;

  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFK_FlashcardsInput, {
    nullable: false
  })
  create!: FlashCardStackCreateWithoutFK_FlashcardsInput;
}
