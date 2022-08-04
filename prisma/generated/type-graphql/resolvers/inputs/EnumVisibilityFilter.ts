import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumVisibilityFilter } from "../inputs/NestedEnumVisibilityFilter";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("EnumVisibilityFilter", {
  isAbstract: true
})
export class EnumVisibilityFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumVisibilityFilter, {
    nullable: true
  })
  not?: NestedEnumVisibilityFilter | undefined;
}
