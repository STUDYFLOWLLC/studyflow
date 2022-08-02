import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput";
import { FlashcardStackCreateWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackCreateWithoutFK_FlashcardsInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackCreateNestedOneWithoutFK_FlashcardsInput", {
  isAbstract: true
})
export class FlashcardStackCreateNestedOneWithoutFK_FlashcardsInput {
  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_FlashcardsInput, {
    nullable: true
  })
  create?: FlashcardStackCreateWithoutFK_FlashcardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashcardStackWhereUniqueInput | undefined;
}
