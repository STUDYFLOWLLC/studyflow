import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewWhereInput } from "../inputs/FlashcardReviewWhereInput";

@TypeGraphQL.InputType("FlashcardReviewListRelationFilter", {
  isAbstract: true
})
export class FlashcardReviewListRelationFilter {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereInput, {
    nullable: true
  })
  every?: FlashcardReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewWhereInput, {
    nullable: true
  })
  some?: FlashcardReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewWhereInput, {
    nullable: true
  })
  none?: FlashcardReviewWhereInput | undefined;
}
