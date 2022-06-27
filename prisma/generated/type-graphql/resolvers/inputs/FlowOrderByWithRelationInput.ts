import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermOrderByWithRelationInput } from "../inputs/CourseOnTermOrderByWithRelationInput";
import { FlashCardStackOrderByRelationAggregateInput } from "../inputs/FlashCardStackOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlowOrderByWithRelationInput", {
  isAbstract: true
})
export class FlowOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Visibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermOrderByWithRelationInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_CourseOnTermID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Tasks?: TaskOrderByRelationAggregateInput | undefined;
}