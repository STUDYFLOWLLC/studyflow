import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumVisibilityNullableFilter } from "../inputs/NestedEnumVisibilityNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("NestedEnumVisibilityNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumVisibilityNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  equals?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;

  @TypeGraphQL.Field(_type => [Visibility], {
    nullable: true
  })
  in?: Array<"HIDDEN" | "PRIVATE" | "PUBLIC"> | undefined;

  @TypeGraphQL.Field(_type => [Visibility], {
    nullable: true
  })
  notIn?: Array<"HIDDEN" | "PRIVATE" | "PUBLIC"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumVisibilityNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumVisibilityNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumVisibilityNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumVisibilityNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumVisibilityNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumVisibilityNullableFilter | undefined;
}
