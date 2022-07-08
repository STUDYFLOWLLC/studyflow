import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermRelationFilter } from "../inputs/CourseOnTermRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumFlowTypeFilter } from "../inputs/EnumFlowTypeFilter";
import { EnumVisibilityFilter } from "../inputs/EnumVisibilityFilter";
import { FlashCardStackListRelationFilter } from "../inputs/FlashCardStackListRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";

@TypeGraphQL.InputType("FlowWhereInput", {
  isAbstract: true
})
export class FlowWhereInput {
  @TypeGraphQL.Field(_type => [FlowWhereInput], {
    nullable: true
  })
  AND?: FlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereInput], {
    nullable: true
  })
  OR?: FlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereInput], {
    nullable: true
  })
  NOT?: FlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FlowID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  UserEnteredDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFlowTypeFilter, {
    nullable: true
  })
  Type?: EnumFlowTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Body?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFilter, {
    nullable: true
  })
  Visibility?: EnumVisibilityFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermRelationFilter, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseOnTermID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackListRelationFilter, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  FK_Tasks?: TaskListRelationFilter | undefined;
}
