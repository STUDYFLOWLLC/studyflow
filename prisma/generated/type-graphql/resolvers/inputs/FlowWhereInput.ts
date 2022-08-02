import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CourseOnTermRelationFilter } from "../inputs/CourseOnTermRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumFlowTypeFilter } from "../inputs/EnumFlowTypeFilter";
import { EnumVisibilityFilter } from "../inputs/EnumVisibilityFilter";
import { FlashcardStackListRelationFilter } from "../inputs/FlashcardStackListRelationFilter";
import { FlowViewListRelationFilter } from "../inputs/FlowViewListRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

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
  LastOpened?: DateTimeFilter | undefined;

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

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  Trashed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFilter, {
    nullable: true
  })
  Visibility?: EnumVisibilityFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  WasAutomated?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Body?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  DeletedTime?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermRelationFilter, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseOnTermID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackListRelationFilter, {
    nullable: true
  })
  FK_FlashcardStacks?: FlashcardStackListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  FK_Tasks?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FlowViewListRelationFilter, {
    nullable: true
  })
  FK_FlowView?: FlowViewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;
}
