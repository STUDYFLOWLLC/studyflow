import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStatus } from "../../enums/FlashcardStatus";

@TypeGraphQL.InputType("EnumFlashcardStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumFlashcardStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => FlashcardStatus, {
    nullable: true
  })
  set?: "NEUTRAL" | "CORRECT" | "INCORRECT" | undefined;
}
