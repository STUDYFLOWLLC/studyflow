import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserAvgOrderByAggregateInput } from "../inputs/CourseOnUserAvgOrderByAggregateInput";
import { CourseOnUserCountOrderByAggregateInput } from "../inputs/CourseOnUserCountOrderByAggregateInput";
import { CourseOnUserMaxOrderByAggregateInput } from "../inputs/CourseOnUserMaxOrderByAggregateInput";
import { CourseOnUserMinOrderByAggregateInput } from "../inputs/CourseOnUserMinOrderByAggregateInput";
import { CourseOnUserSumOrderByAggregateInput } from "../inputs/CourseOnUserSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOnUserOrderByWithAggregationInput", {
  isAbstract: true
})
export class CourseOnUserOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CourseOnUserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  HOLDER?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_CourseID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CourseOnUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CourseOnUserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CourseOnUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CourseOnUserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CourseOnUserSumOrderByAggregateInput | undefined;
}
