import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("NullableEnumTermTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumTermTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TermType, {
    nullable: true
  })
  set?: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER" | undefined;
}
