import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTermTypeFilter } from "../inputs/NestedEnumTermTypeFilter";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("EnumTermTypeFilter", {
  isAbstract: true
})
export class EnumTermTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTermTypeFilter, {
    nullable: true
  })
  not?: NestedEnumTermTypeFilter | undefined;
}
