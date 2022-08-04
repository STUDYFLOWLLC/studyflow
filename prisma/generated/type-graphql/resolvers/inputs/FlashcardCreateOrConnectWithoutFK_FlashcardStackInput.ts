import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardCreateWithoutFK_FlashcardStackInput";
import { FlashcardWhereUniqueInput } from "../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardCreateOrConnectWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardCreateOrConnectWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardCreateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  create!: FlashcardCreateWithoutFK_FlashcardStackInput;
}
