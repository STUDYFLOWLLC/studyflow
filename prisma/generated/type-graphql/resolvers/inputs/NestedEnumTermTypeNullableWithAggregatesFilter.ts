import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTermTypeNullableFilter } from "../inputs/NestedEnumTermTypeNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("NestedEnumTermTypeNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumTermTypeNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => TermType, {
    nullable: true
  })
  equals?: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER" | undefined;

  @TypeGraphQL.Field(_type => [TermType], {
    nullable: true
  })
  in?: Array<"QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER"> | undefined;

  @TypeGraphQL.Field(_type => [TermType], {
    nullable: true
  })
  notIn?: Array<"QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTermTypeNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTermTypeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTermTypeNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumTermTypeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTermTypeNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumTermTypeNullableFilter | undefined;
}
