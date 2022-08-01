import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCountOrderByAggregateInput } from "../inputs/FlashcardReviewCountOrderByAggregateInput";
import { FlashcardReviewMaxOrderByAggregateInput } from "../inputs/FlashcardReviewMaxOrderByAggregateInput";
import { FlashcardReviewMinOrderByAggregateInput } from "../inputs/FlashcardReviewMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlashcardReviewOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlashcardReviewOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlashcardReviewID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlashcardID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlashcardReviewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlashcardReviewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlashcardReviewMinOrderByAggregateInput | undefined;
}
