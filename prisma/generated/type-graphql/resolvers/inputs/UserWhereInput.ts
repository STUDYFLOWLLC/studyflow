import * as TypeGraphQL from "type-graphql"
import { AutomationListRelationFilter } from "./AutomationListRelationFilter"
import { DateTimeFilter } from "./DateTimeFilter"
import { EnumSetupStepFilter } from "./EnumSetupStepFilter"
import { EnumVisibilityFilter } from "./EnumVisibilityFilter"
import { FlowListRelationFilter } from "./FlowListRelationFilter"
import { FlowViewListRelationFilter } from "./FlowViewListRelationFilter"
import { FriendshipListRelationFilter } from "./FriendshipListRelationFilter"
import { IntFilter } from "./IntFilter"
import { IntNullableFilter } from "./IntNullableFilter"
import { SchoolRelationFilter } from "./SchoolRelationFilter"
import { SettingRelationFilter } from "./SettingRelationFilter"
import { StringFilter } from "./StringFilter"
import { StringNullableFilter } from "./StringNullableFilter"
import { StudyGroupListRelationFilter } from "./StudyGroupListRelationFilter"
import { TaskListRelationFilter } from "./TaskListRelationFilter"
import { TermListRelationFilter } from "./TermListRelationFilter"
import { UserOnStudyGroupListRelationFilter } from "./UserOnStudyGroupListRelationFilter"

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  UserID?: IntFilter | undefined

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined

  @TypeGraphQL.Field(_type => EnumSetupStepFilter, {
    nullable: true
  })
  SetupStep?: EnumSetupStepFilter | undefined

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  SupabaseID?: StringFilter | undefined

  @TypeGraphQL.Field(_type => EnumVisibilityFilter, {
    nullable: true
  })
  DefaultVisibility?: EnumVisibilityFilter | undefined

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Email?: StringFilter | undefined

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Name?: StringNullableFilter | undefined

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Username?: StringNullableFilter | undefined

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ProfilePictureLink?: StringNullableFilter | undefined

  @TypeGraphQL.Field(_type => SchoolRelationFilter, {
    nullable: true
  })
  FK_School?: SchoolRelationFilter | undefined

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableFilter | undefined

  @TypeGraphQL.Field(_type => TermListRelationFilter, {
    nullable: true
  })
  FK_Terms?: TermListRelationFilter | undefined

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  FK_Task?: TaskListRelationFilter | undefined

  @TypeGraphQL.Field(_type => SettingRelationFilter, {
    nullable: true
  })
  FK_Settings?: SettingRelationFilter | undefined

  @TypeGraphQL.Field(_type => FlowViewListRelationFilter, {
    nullable: true
  })
  FK_FlowView?: FlowViewListRelationFilter | undefined

  @TypeGraphQL.Field(_type => FlowListRelationFilter, {
    nullable: true
  })
  FK_Flow?: FlowListRelationFilter | undefined

  @TypeGraphQL.Field(_type => AutomationListRelationFilter, {
    nullable: true
  })
  FK_Automation?: AutomationListRelationFilter | undefined

  @TypeGraphQL.Field(_type => StudyGroupListRelationFilter, {
    nullable: true
  })
  FK_StudyGroups?: StudyGroupListRelationFilter | undefined

  @TypeGraphQL.Field(_type => UserOnStudyGroupListRelationFilter, {
    nullable: true
  })
  FK_UserOnStudyGroups?: UserOnStudyGroupListRelationFilter | undefined

  @TypeGraphQL.Field(_type => FriendshipListRelationFilter, {
    nullable: true
  })
  FK_FriendshipsInitiated?: FriendshipListRelationFilter | undefined

  @TypeGraphQL.Field(_type => FriendshipListRelationFilter, {
    nullable: true
  })
  FK_FriendshipsAccepted?: FriendshipListRelationFilter | undefined
}
