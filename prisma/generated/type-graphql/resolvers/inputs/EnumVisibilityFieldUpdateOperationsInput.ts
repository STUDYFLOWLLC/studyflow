import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("EnumVisibilityFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumVisibilityFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  set?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;
}
