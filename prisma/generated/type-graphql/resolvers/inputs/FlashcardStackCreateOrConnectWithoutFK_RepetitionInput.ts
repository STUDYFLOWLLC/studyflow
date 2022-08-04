import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateWithoutFK_RepetitionInput } from "../inputs/FlashcardStackCreateWithoutFK_RepetitionInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackCreateOrConnectWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class FlashcardStackCreateOrConnectWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_RepetitionInput, {
    nullable: false
  })
  create!: FlashcardStackCreateWithoutFK_RepetitionInput;
}
