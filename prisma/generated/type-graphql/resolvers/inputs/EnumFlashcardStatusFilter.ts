import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumFlashcardStatusFilter } from "../inputs/NestedEnumFlashcardStatusFilter";
import { FlashcardStatus } from "../../enums/FlashcardStatus";

@TypeGraphQL.InputType("EnumFlashcardStatusFilter", {
  isAbstract: true
})
export class EnumFlashcardStatusFilter {
  @TypeGraphQL.Field(_type => FlashcardStatus, {
    nullable: true
  })
  equals?: "NEUTRAL" | "CORRECT" | "INCORRECT" | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStatus], {
    nullable: true
  })
  in?: Array<"NEUTRAL" | "CORRECT" | "INCORRECT"> | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStatus], {
    nullable: true
  })
  notIn?: Array<"NEUTRAL" | "CORRECT" | "INCORRECT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFlashcardStatusFilter, {
    nullable: true
  })
  not?: NestedEnumFlashcardStatusFilter | undefined;
}
