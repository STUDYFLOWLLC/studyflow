import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateWithoutFlashCardsInput } from "../inputs/FlashCardStackCreateWithoutFlashCardsInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackCreateOrConnectWithoutFlashCardsInput", {
  isAbstract: true
})
export class FlashCardStackCreateOrConnectWithoutFlashCardsInput {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFlashCardsInput, {
    nullable: false
  })
  create!: FlashCardStackCreateWithoutFlashCardsInput;
}
