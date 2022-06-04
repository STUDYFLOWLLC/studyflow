import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAvgOrderByAggregateInput } from "../inputs/CourseOnTermAvgOrderByAggregateInput";
import { CourseOnTermCountOrderByAggregateInput } from "../inputs/CourseOnTermCountOrderByAggregateInput";
import { CourseOnTermMaxOrderByAggregateInput } from "../inputs/CourseOnTermMaxOrderByAggregateInput";
import { CourseOnTermMinOrderByAggregateInput } from "../inputs/CourseOnTermMinOrderByAggregateInput";
import { CourseOnTermSumOrderByAggregateInput } from "../inputs/CourseOnTermSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOnTermOrderByWithAggregationInput", {
  isAbstract: true
})
export class CourseOnTermOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CourseOnTermID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_CourseID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_TermID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CourseOnTermCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CourseOnTermAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CourseOnTermMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CourseOnTermMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CourseOnTermSumOrderByAggregateInput | undefined;
}
