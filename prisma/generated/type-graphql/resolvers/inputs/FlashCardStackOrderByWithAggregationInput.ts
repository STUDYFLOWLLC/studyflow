import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackAvgOrderByAggregateInput } from "../inputs/FlashCardStackAvgOrderByAggregateInput";
import { FlashCardStackCountOrderByAggregateInput } from "../inputs/FlashCardStackCountOrderByAggregateInput";
import { FlashCardStackMaxOrderByAggregateInput } from "../inputs/FlashCardStackMaxOrderByAggregateInput";
import { FlashCardStackMinOrderByAggregateInput } from "../inputs/FlashCardStackMinOrderByAggregateInput";
import { FlashCardStackSumOrderByAggregateInput } from "../inputs/FlashCardStackSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlashCardStackOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlashCardStackOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlashCardStackID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlashCardStackCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FlashCardStackAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlashCardStackMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlashCardStackMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FlashCardStackSumOrderByAggregateInput | undefined;
}
