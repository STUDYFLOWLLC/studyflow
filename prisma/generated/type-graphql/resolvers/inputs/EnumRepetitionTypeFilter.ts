import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRepetitionTypeFilter } from "../inputs/NestedEnumRepetitionTypeFilter";
import { RepetitionType } from "../../enums/RepetitionType";

@TypeGraphQL.InputType("EnumRepetitionTypeFilter", {
  isAbstract: true
})
export class EnumRepetitionTypeFilter {
  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: true
  })
  equals?: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY" | undefined;

  @TypeGraphQL.Field(_type => [RepetitionType], {
    nullable: true
  })
  in?: Array<"FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY"> | undefined;

  @TypeGraphQL.Field(_type => [RepetitionType], {
    nullable: true
  })
  notIn?: Array<"FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRepetitionTypeFilter, {
    nullable: true
  })
  not?: NestedEnumRepetitionTypeFilter | undefined;
}
