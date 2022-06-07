import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseAvgOrderByAggregateInput } from "../inputs/CourseAvgOrderByAggregateInput";
import { CourseCountOrderByAggregateInput } from "../inputs/CourseCountOrderByAggregateInput";
import { CourseMaxOrderByAggregateInput } from "../inputs/CourseMaxOrderByAggregateInput";
import { CourseMinOrderByAggregateInput } from "../inputs/CourseMinOrderByAggregateInput";
import { CourseSumOrderByAggregateInput } from "../inputs/CourseSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOrderByWithAggregationInput", {
  isAbstract: true
})
export class CourseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CourseID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  IsOfficial?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Term?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_SchoolID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_ProfessorID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CourseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CourseAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CourseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CourseMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CourseSumOrderByAggregateInput | undefined;
}
