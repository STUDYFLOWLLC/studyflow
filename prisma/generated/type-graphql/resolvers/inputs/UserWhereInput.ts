import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationListRelationFilter } from "../inputs/AutomationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSetupStepFilter } from "../inputs/EnumSetupStepFilter";
import { EnumVisibilityFilter } from "../inputs/EnumVisibilityFilter";
import { FlowListRelationFilter } from "../inputs/FlowListRelationFilter";
import { FlowViewListRelationFilter } from "../inputs/FlowViewListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SchoolRelationFilter } from "../inputs/SchoolRelationFilter";
import { SettingRelationFilter } from "../inputs/SettingRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { TermListRelationFilter } from "../inputs/TermListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  UserID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSetupStepFilter, {
    nullable: true
  })
  SetupStep?: EnumSetupStepFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  SupabaseID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFilter, {
    nullable: true
  })
  DefaultVisibility?: EnumVisibilityFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Username?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ProfilePictureLink?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => SchoolRelationFilter, {
    nullable: true
  })
  FK_School?: SchoolRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TermListRelationFilter, {
    nullable: true
  })
  FK_Terms?: TermListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  FK_Task?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SettingRelationFilter, {
    nullable: true
  })
  FK_Settings?: SettingRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FlowViewListRelationFilter, {
    nullable: true
  })
  FK_FlowView?: FlowViewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FlowListRelationFilter, {
    nullable: true
  })
  FK_Flow?: FlowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AutomationListRelationFilter, {
    nullable: true
  })
  FK_Automation?: AutomationListRelationFilter | undefined;
}
