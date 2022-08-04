import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewWhereInput } from "../inputs/FlashcardStackReviewWhereInput";

@TypeGraphQL.InputType("FlashcardStackReviewRelationFilter", {
  isAbstract: true
})
export class FlashcardStackReviewRelationFilter {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereInput, {
    nullable: true
  })
  is?: FlashcardStackReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereInput, {
    nullable: true
  })
  isNot?: FlashcardStackReviewWhereInput | undefined;
}
