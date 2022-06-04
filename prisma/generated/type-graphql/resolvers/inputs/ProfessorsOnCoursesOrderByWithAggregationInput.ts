import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesAvgOrderByAggregateInput } from "../inputs/ProfessorsOnCoursesAvgOrderByAggregateInput";
import { ProfessorsOnCoursesCountOrderByAggregateInput } from "../inputs/ProfessorsOnCoursesCountOrderByAggregateInput";
import { ProfessorsOnCoursesMaxOrderByAggregateInput } from "../inputs/ProfessorsOnCoursesMaxOrderByAggregateInput";
import { ProfessorsOnCoursesMinOrderByAggregateInput } from "../inputs/ProfessorsOnCoursesMinOrderByAggregateInput";
import { ProfessorsOnCoursesSumOrderByAggregateInput } from "../inputs/ProfessorsOnCoursesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfessorsOnCoursesOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProfessorsOnCoursesID?: "asc" | "desc" | undefined;

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
  FK_ProfessorID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProfessorsOnCoursesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProfessorsOnCoursesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProfessorsOnCoursesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProfessorsOnCoursesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProfessorsOnCoursesSumOrderByAggregateInput | undefined;
}
