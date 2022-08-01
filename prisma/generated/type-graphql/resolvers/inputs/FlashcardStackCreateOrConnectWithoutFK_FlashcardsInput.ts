import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackCreateWithoutFK_FlashcardsInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput", {
  isAbstract: true
})
export class FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput {
  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_FlashcardsInput, {
    nullable: false
  })
  create!: FlashcardStackCreateWithoutFK_FlashcardsInput;
}
