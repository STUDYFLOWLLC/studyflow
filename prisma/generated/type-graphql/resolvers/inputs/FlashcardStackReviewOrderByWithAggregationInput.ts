import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCountOrderByAggregateInput } from "../inputs/FlashcardStackReviewCountOrderByAggregateInput";
import { FlashcardStackReviewMaxOrderByAggregateInput } from "../inputs/FlashcardStackReviewMaxOrderByAggregateInput";
import { FlashcardStackReviewMinOrderByAggregateInput } from "../inputs/FlashcardStackReviewMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlashcardStackReviewOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlashcardStackReviewOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlashcardStackID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlashcardStackReviewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlashcardStackReviewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlashcardStackReviewMinOrderByAggregateInput | undefined;
}
