import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupAvgOrderByAggregateInput } from "../inputs/UserOnStudyGroupAvgOrderByAggregateInput";
import { UserOnStudyGroupCountOrderByAggregateInput } from "../inputs/UserOnStudyGroupCountOrderByAggregateInput";
import { UserOnStudyGroupMaxOrderByAggregateInput } from "../inputs/UserOnStudyGroupMaxOrderByAggregateInput";
import { UserOnStudyGroupMinOrderByAggregateInput } from "../inputs/UserOnStudyGroupMinOrderByAggregateInput";
import { UserOnStudyGroupSumOrderByAggregateInput } from "../inputs/UserOnStudyGroupSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOnStudyGroupOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserOnStudyGroupOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UserOnStudyGroupID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SendDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  AcceptDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RemoveDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_StudyGroupID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserOnStudyGroupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserOnStudyGroupAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserOnStudyGroupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserOnStudyGroupMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserOnStudyGroupSumOrderByAggregateInput | undefined;
}
