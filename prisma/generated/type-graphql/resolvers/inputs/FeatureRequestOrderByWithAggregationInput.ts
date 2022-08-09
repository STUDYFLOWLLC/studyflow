import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestAvgOrderByAggregateInput } from "../inputs/FeatureRequestAvgOrderByAggregateInput";
import { FeatureRequestCountOrderByAggregateInput } from "../inputs/FeatureRequestCountOrderByAggregateInput";
import { FeatureRequestMaxOrderByAggregateInput } from "../inputs/FeatureRequestMaxOrderByAggregateInput";
import { FeatureRequestMinOrderByAggregateInput } from "../inputs/FeatureRequestMinOrderByAggregateInput";
import { FeatureRequestSumOrderByAggregateInput } from "../inputs/FeatureRequestSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FeatureRequestOrderByWithAggregationInput", {
  isAbstract: true
})
export class FeatureRequestOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FeatureRequestID?: "asc" | "desc" | undefined;

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
  ImplementedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FeatureRequestCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FeatureRequestAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FeatureRequestMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FeatureRequestMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FeatureRequestSumOrderByAggregateInput | undefined;
}
