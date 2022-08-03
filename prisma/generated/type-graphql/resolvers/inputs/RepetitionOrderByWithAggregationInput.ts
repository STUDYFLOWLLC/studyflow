import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCountOrderByAggregateInput } from "../inputs/RepetitionCountOrderByAggregateInput";
import { RepetitionMaxOrderByAggregateInput } from "../inputs/RepetitionMaxOrderByAggregateInput";
import { RepetitionMinOrderByAggregateInput } from "../inputs/RepetitionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RepetitionOrderByWithAggregationInput", {
  isAbstract: true
})
export class RepetitionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RepetitionID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RepetitionType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlashcardStackID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RepetitionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RepetitionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RepetitionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RepetitionMinOrderByAggregateInput | undefined;
}
