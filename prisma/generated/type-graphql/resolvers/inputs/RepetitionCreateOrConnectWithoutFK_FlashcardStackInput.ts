import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateWithoutFK_FlashcardStackInput } from "../inputs/RepetitionCreateWithoutFK_FlashcardStackInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionCreateOrConnectWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class RepetitionCreateOrConnectWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: false
  })
  where!: RepetitionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_FlashcardStackInput, {
    nullable: false
  })
  create!: RepetitionCreateWithoutFK_FlashcardStackInput;
}
