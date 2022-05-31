import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("NestedEnumVisibilityNullableFilter", {
  isAbstract: true
})
export class NestedEnumVisibilityNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumVisibilityNullableFilter, {
    nullable: true
  })
  not?: NestedEnumVisibilityNullableFilter | undefined;
}
