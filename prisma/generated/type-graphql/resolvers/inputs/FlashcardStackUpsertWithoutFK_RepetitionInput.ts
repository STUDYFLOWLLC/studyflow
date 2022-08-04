import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateWithoutFK_RepetitionInput } from "../inputs/FlashcardStackCreateWithoutFK_RepetitionInput";
import { FlashcardStackUpdateWithoutFK_RepetitionInput } from "../inputs/FlashcardStackUpdateWithoutFK_RepetitionInput";

@TypeGraphQL.InputType("FlashcardStackUpsertWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class FlashcardStackUpsertWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => FlashcardStackUpdateWithoutFK_RepetitionInput, {
    nullable: false
  })
  update!: FlashcardStackUpdateWithoutFK_RepetitionInput;

  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_RepetitionInput, {
    nullable: false
  })
  create!: FlashcardStackCreateWithoutFK_RepetitionInput;
}
