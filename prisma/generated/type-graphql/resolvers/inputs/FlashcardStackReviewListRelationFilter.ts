import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewWhereInput } from "../inputs/FlashcardStackReviewWhereInput";

@TypeGraphQL.InputType("FlashcardStackReviewListRelationFilter", {
  isAbstract: true
})
export class FlashcardStackReviewListRelationFilter {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereInput, {
    nullable: true
  })
  every?: FlashcardStackReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereInput, {
    nullable: true
  })
  some?: FlashcardStackReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereInput, {
    nullable: true
  })
  none?: FlashcardStackReviewWhereInput | undefined;
}
