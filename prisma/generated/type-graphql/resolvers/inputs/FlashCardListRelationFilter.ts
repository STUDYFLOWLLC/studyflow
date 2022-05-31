import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardWhereInput } from "../inputs/FlashCardWhereInput";

@TypeGraphQL.InputType("FlashCardListRelationFilter", {
  isAbstract: true
})
export class FlashCardListRelationFilter {
  @TypeGraphQL.Field(_type => FlashCardWhereInput, {
    nullable: true
  })
  every?: FlashCardWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardWhereInput, {
    nullable: true
  })
  some?: FlashCardWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardWhereInput, {
    nullable: true
  })
  none?: FlashCardWhereInput | undefined;
}
