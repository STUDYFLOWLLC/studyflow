import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("NullableEnumVisibilityFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumVisibilityFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  set?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;
}
