import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackWhereInput } from "../inputs/FlashcardStackWhereInput";

@TypeGraphQL.InputType("FlashcardStackRelationFilter", {
  isAbstract: true
})
export class FlashcardStackRelationFilter {
  @TypeGraphQL.Field(_type => FlashcardStackWhereInput, {
    nullable: true
  })
  is?: FlashcardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackWhereInput, {
    nullable: true
  })
  isNot?: FlashcardStackWhereInput | undefined;
}
