import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackCreateWithoutFK_FlashcardsInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput", {
  isAbstract: true
})
export class FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFK_FlashcardsInput, {
    nullable: false
  })
  create!: FlashCardStackCreateWithoutFK_FlashcardsInput;
}
