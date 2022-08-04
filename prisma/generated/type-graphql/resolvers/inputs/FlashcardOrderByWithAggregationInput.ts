import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardAvgOrderByAggregateInput } from "../inputs/FlashcardAvgOrderByAggregateInput";
import { FlashcardCountOrderByAggregateInput } from "../inputs/FlashcardCountOrderByAggregateInput";
import { FlashcardMaxOrderByAggregateInput } from "../inputs/FlashcardMaxOrderByAggregateInput";
import { FlashcardMinOrderByAggregateInput } from "../inputs/FlashcardMinOrderByAggregateInput";
import { FlashcardSumOrderByAggregateInput } from "../inputs/FlashcardSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlashcardOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlashcardOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlashcardID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DeletedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlashcardStackID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Front?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FrontImageUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Back?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  BackImageUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashcardCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlashcardCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FlashcardAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlashcardMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlashcardMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FlashcardSumOrderByAggregateInput | undefined;
}
