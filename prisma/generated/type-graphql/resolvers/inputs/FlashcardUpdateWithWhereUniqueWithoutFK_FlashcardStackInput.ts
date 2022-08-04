import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardUpdateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardUpdateWithoutFK_FlashcardStackInput";
import { FlashcardWhereUniqueInput } from "../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardUpdateWithWhereUniqueWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardUpdateWithWhereUniqueWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardUpdateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  data!: FlashcardUpdateWithoutFK_FlashcardStackInput;
}
