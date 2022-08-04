import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateWithoutFK_FlashcardStackInput } from "../inputs/RepetitionCreateWithoutFK_FlashcardStackInput";
import { RepetitionUpdateWithoutFK_FlashcardStackInput } from "../inputs/RepetitionUpdateWithoutFK_FlashcardStackInput";

@TypeGraphQL.InputType("RepetitionUpsertWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class RepetitionUpsertWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => RepetitionUpdateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  update!: RepetitionUpdateWithoutFK_FlashcardStackInput;

  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  create!: RepetitionCreateWithoutFK_FlashcardStackInput;
}
