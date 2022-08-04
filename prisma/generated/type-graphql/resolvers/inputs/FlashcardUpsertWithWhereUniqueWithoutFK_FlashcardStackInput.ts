import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardCreateWithoutFK_FlashcardStackInput";
import { FlashcardUpdateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardUpdateWithoutFK_FlashcardStackInput";
import { FlashcardWhereUniqueInput } from "../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardUpsertWithWhereUniqueWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardUpsertWithWhereUniqueWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardUpdateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  update!: FlashcardUpdateWithoutFK_FlashcardStackInput;

  @TypeGraphQL.Field(_type => FlashcardCreateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  create!: FlashcardCreateWithoutFK_FlashcardStackInput;
}
