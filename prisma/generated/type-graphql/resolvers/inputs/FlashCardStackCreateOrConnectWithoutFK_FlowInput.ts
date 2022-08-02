import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateWithoutFK_FlowInput } from "../inputs/FlashcardStackCreateWithoutFK_FlowInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackCreateOrConnectWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashcardStackCreateOrConnectWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: FlashcardStackCreateWithoutFK_FlowInput;
}
