import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewOrderByRelationAggregateInput } from "../inputs/FlashcardReviewOrderByRelationAggregateInput";
import { FlashcardStackOrderByWithRelationInput } from "../inputs/FlashcardStackOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlashcardStackReviewOrderByWithRelationInput", {
  isAbstract: true
})
export class FlashcardStackReviewOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlashcardStackReviewID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  EndTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackOrderByWithRelationInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlashcardStackID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FlashcardReviews?: FlashcardReviewOrderByRelationAggregateInput | undefined;
}
