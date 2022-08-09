import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogAvgOrderByAggregateInput } from "../inputs/BlogAvgOrderByAggregateInput";
import { BlogCountOrderByAggregateInput } from "../inputs/BlogCountOrderByAggregateInput";
import { BlogMaxOrderByAggregateInput } from "../inputs/BlogMaxOrderByAggregateInput";
import { BlogMinOrderByAggregateInput } from "../inputs/BlogMinOrderByAggregateInput";
import { BlogSumOrderByAggregateInput } from "../inputs/BlogSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BlogOrderByWithAggregationInput", {
  isAbstract: true
})
export class BlogOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  BlogID?: "asc" | "desc" | undefined;

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
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BlogCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BlogCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BlogAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BlogMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BlogMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BlogSumOrderByAggregateInput | undefined;
}
