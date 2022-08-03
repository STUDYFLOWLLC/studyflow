import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRepetitionTypeFilter } from "../inputs/NestedEnumRepetitionTypeFilter";
import { NestedEnumRepetitionTypeWithAggregatesFilter } from "../inputs/NestedEnumRepetitionTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { RepetitionType } from "../../enums/RepetitionType";

@TypeGraphQL.InputType("EnumRepetitionTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumRepetitionTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumRepetitionTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRepetitionTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRepetitionTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumRepetitionTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRepetitionTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumRepetitionTypeFilter | undefined;
}
