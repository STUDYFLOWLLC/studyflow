import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTermTypeFilter } from "../inputs/NestedEnumTermTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("NestedEnumTermTypeWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumTermTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTermTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTermTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTermTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumTermTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTermTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumTermTypeFilter | undefined;
}
