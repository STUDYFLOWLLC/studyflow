import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionType } from "../../enums/RepetitionType";

@TypeGraphQL.InputType("EnumRepetitionTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumRepetitionTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: true
  })
  set?: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY" | undefined;
}
