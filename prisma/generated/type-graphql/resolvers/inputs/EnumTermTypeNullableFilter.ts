import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTermTypeNullableFilter } from "../inputs/NestedEnumTermTypeNullableFilter";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("EnumTermTypeNullableFilter", {
  isAbstract: true
})
export class EnumTermTypeNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTermTypeNullableFilter, {
    nullable: true
  })
  not?: NestedEnumTermTypeNullableFilter | undefined;
}
