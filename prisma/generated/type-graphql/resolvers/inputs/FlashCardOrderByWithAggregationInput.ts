import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardAvgOrderByAggregateInput } from "../inputs/FlashCardAvgOrderByAggregateInput";
import { FlashCardCountOrderByAggregateInput } from "../inputs/FlashCardCountOrderByAggregateInput";
import { FlashCardMaxOrderByAggregateInput } from "../inputs/FlashCardMaxOrderByAggregateInput";
import { FlashCardMinOrderByAggregateInput } from "../inputs/FlashCardMinOrderByAggregateInput";
import { FlashCardSumOrderByAggregateInput } from "../inputs/FlashCardSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlashCardOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlashCardOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlashCardID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlashCardStackID?: "asc" | "desc" | undefined;

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
  Back?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashCardCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlashCardCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FlashCardAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlashCardMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlashCardMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FlashCardSumOrderByAggregateInput | undefined;
}
