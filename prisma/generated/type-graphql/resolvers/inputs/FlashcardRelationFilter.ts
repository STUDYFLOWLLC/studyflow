import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardWhereInput } from "../inputs/FlashcardWhereInput";

@TypeGraphQL.InputType("FlashcardRelationFilter", {
  isAbstract: true
})
export class FlashcardRelationFilter {
  @TypeGraphQL.Field(_type => FlashcardWhereInput, {
    nullable: true
  })
  is?: FlashcardWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardWhereInput, {
    nullable: true
  })
  isNot?: FlashcardWhereInput | undefined;
}
