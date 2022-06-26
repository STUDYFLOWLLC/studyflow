import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_FlashCardStacksInput } from "../inputs/FlowCreateWithoutFK_FlashCardStacksInput";
import { FlowUpdateWithoutFK_FlashCardStacksInput } from "../inputs/FlowUpdateWithoutFK_FlashCardStacksInput";

@TypeGraphQL.InputType("FlowUpsertWithoutFK_FlashCardStacksInput", {
  isAbstract: true
})
export class FlowUpsertWithoutFK_FlashCardStacksInput {
  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_FlashCardStacksInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFK_FlashCardStacksInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlashCardStacksInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_FlashCardStacksInput;
}
