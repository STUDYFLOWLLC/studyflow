import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_FlashcardStacksInput } from "../inputs/FlowCreateWithoutFK_FlashcardStacksInput";
import { FlowUpdateWithoutFK_FlashcardStacksInput } from "../inputs/FlowUpdateWithoutFK_FlashcardStacksInput";

@TypeGraphQL.InputType("FlowUpsertWithoutFK_FlashcardStacksInput", {
  isAbstract: true
})
export class FlowUpsertWithoutFK_FlashcardStacksInput {
  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_FlashcardStacksInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFK_FlashcardStacksInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlashcardStacksInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_FlashcardStacksInput;
}
