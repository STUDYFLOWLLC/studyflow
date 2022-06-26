import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumVisibilityFilter } from "../inputs/NestedEnumVisibilityFilter";
import { NestedEnumVisibilityWithAggregatesFilter } from "../inputs/NestedEnumVisibilityWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("EnumVisibilityWithAggregatesFilter", {
  isAbstract: true
})
export class EnumVisibilityWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumVisibilityWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumVisibilityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumVisibilityFilter, {
    nullable: true
  })
  _min?: NestedEnumVisibilityFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumVisibilityFilter, {
    nullable: true
  })
  _max?: NestedEnumVisibilityFilter | undefined;
}
