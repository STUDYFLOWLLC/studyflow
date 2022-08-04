import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCountOrderByAggregateInput } from "../inputs/FlashcardStackCountOrderByAggregateInput";
import { FlashcardStackMaxOrderByAggregateInput } from "../inputs/FlashcardStackMaxOrderByAggregateInput";
import { FlashcardStackMinOrderByAggregateInput } from "../inputs/FlashcardStackMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlashcardStackOrderByWithAggregationInput", {
  isAbstract: true
})
export class FlashcardStackOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlashcardStackID?: "asc" | "desc" | undefined;

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
  FK_FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlashcardStackCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlashcardStackMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlashcardStackMinOrderByAggregateInput | undefined;
}
