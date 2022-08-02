import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackUpdateWithoutFK_FlowInput } from "../inputs/FlashcardStackUpdateWithoutFK_FlowInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackUpdateWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashcardStackUpdateWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  data!: FlashcardStackUpdateWithoutFK_FlowInput;
}
