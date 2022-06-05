import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("NestedEnumTermTypeFilter", {
  isAbstract: true
})
export class NestedEnumTermTypeFilter {
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
