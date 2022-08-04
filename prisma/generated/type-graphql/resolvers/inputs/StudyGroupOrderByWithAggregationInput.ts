import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupAvgOrderByAggregateInput } from "../inputs/StudyGroupAvgOrderByAggregateInput";
import { StudyGroupCountOrderByAggregateInput } from "../inputs/StudyGroupCountOrderByAggregateInput";
import { StudyGroupMaxOrderByAggregateInput } from "../inputs/StudyGroupMaxOrderByAggregateInput";
import { StudyGroupMinOrderByAggregateInput } from "../inputs/StudyGroupMinOrderByAggregateInput";
import { StudyGroupSumOrderByAggregateInput } from "../inputs/StudyGroupSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StudyGroupOrderByWithAggregationInput", {
  isAbstract: true
})
export class StudyGroupOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  StudyGroupID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StudyGroupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StudyGroupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StudyGroupAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StudyGroupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StudyGroupMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StudyGroupSumOrderByAggregateInput | undefined;
}
