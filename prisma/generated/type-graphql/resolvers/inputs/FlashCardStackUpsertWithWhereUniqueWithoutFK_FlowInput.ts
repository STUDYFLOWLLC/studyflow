import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateWithoutFK_FlowInput } from "../inputs/FlashCardStackCreateWithoutFK_FlowInput";
import { FlashCardStackUpdateWithoutFK_FlowInput } from "../inputs/FlashCardStackUpdateWithoutFK_FlowInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackUpsertWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashCardStackUpsertWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  update!: FlashCardStackUpdateWithoutFK_FlowInput;

  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: FlashCardStackCreateWithoutFK_FlowInput;
}
