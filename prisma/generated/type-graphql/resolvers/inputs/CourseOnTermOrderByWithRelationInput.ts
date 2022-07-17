import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOrderByWithRelationInput } from "../inputs/CourseOrderByWithRelationInput";
import { FlowOrderByRelationAggregateInput } from "../inputs/FlowOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { TermOrderByWithRelationInput } from "../inputs/TermOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOnTermOrderByWithRelationInput", {
  isAbstract: true
})
export class CourseOnTermOrderByWithRelationInput {
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
  Index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Color?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Nickname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  IsNew?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOrderByWithRelationInput, {
    nullable: true
  })
  FK_Course?: CourseOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_CourseID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TermOrderByWithRelationInput, {
    nullable: true
  })
  FK_Term?: TermOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_TermID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlowOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Flows?: FlowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Tasks?: TaskOrderByRelationAggregateInput | undefined;
}
