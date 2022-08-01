import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumFlashcardStatusFilter } from "../inputs/NestedEnumFlashcardStatusFilter";
import { NestedEnumFlashcardStatusWithAggregatesFilter } from "../inputs/NestedEnumFlashcardStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { FlashcardStatus } from "../../enums/FlashcardStatus";

@TypeGraphQL.InputType("EnumFlashcardStatusWithAggregatesFilter", {
  isAbstract: true
})
export class EnumFlashcardStatusWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumFlashcardStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumFlashcardStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFlashcardStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumFlashcardStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFlashcardStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumFlashcardStatusFilter | undefined;
}
