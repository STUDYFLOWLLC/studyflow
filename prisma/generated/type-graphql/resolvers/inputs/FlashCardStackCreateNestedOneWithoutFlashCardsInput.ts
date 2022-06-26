import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateOrConnectWithoutFlashCardsInput } from "../inputs/FlashCardStackCreateOrConnectWithoutFlashCardsInput";
import { FlashCardStackCreateWithoutFlashCardsInput } from "../inputs/FlashCardStackCreateWithoutFlashCardsInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackCreateNestedOneWithoutFlashCardsInput", {
  isAbstract: true
})
export class FlashCardStackCreateNestedOneWithoutFlashCardsInput {
  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFlashCardsInput, {
    nullable: true
  })
  create?: FlashCardStackCreateWithoutFlashCardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateOrConnectWithoutFlashCardsInput, {
    nullable: true
  })
  connectOrCreate?: FlashCardStackCreateOrConnectWithoutFlashCardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashCardStackWhereUniqueInput | undefined;
}
