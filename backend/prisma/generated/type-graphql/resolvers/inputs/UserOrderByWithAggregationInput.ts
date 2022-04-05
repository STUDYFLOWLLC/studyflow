import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAvgOrderByAggregateInput } from "../inputs/UserAvgOrderByAggregateInput";
import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
import { UserSumOrderByAggregateInput } from "../inputs/UserSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DisplayName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProfilePictureLink?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultVisibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserSumOrderByAggregateInput | undefined;
}
