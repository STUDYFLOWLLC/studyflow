import * as TypeGraphQL from "type-graphql"
import { SortOrder } from "../../enums/SortOrder"
import { AutomationOrderByRelationAggregateInput } from "./AutomationOrderByRelationAggregateInput"
import { FlowOrderByRelationAggregateInput } from "./FlowOrderByRelationAggregateInput"
import { FlowViewOrderByRelationAggregateInput } from "./FlowViewOrderByRelationAggregateInput"
import { FriendshipOrderByRelationAggregateInput } from "./FriendshipOrderByRelationAggregateInput"
import { SchoolOrderByWithRelationInput } from "./SchoolOrderByWithRelationInput"
import { SettingOrderByWithRelationInput } from "./SettingOrderByWithRelationInput"
import { StudyGroupOrderByRelationAggregateInput } from "./StudyGroupOrderByRelationAggregateInput"
import { TaskOrderByRelationAggregateInput } from "./TaskOrderByRelationAggregateInput"
import { TermOrderByRelationAggregateInput } from "./TermOrderByRelationAggregateInput"
import { UserOnStudyGroupOrderByRelationAggregateInput } from "./UserOnStudyGroupOrderByRelationAggregateInput"

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UserID?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SetupStep?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SupabaseID?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultVisibility?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Email?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Username?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProfilePictureLink?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SchoolOrderByWithRelationInput, {
    nullable: true
  })
  FK_School?: SchoolOrderByWithRelationInput | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_SchoolID?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => TermOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Terms?: TermOrderByRelationAggregateInput | undefined

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Task?: TaskOrderByRelationAggregateInput | undefined

  @TypeGraphQL.Field(_type => SettingOrderByWithRelationInput, {
    nullable: true
  })
  FK_Settings?: SettingOrderByWithRelationInput | undefined

  @TypeGraphQL.Field(_type => FlowViewOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FlowView?: FlowViewOrderByRelationAggregateInput | undefined

  @TypeGraphQL.Field(_type => FlowOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Flow?: FlowOrderByRelationAggregateInput | undefined

  @TypeGraphQL.Field(_type => AutomationOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Automation?: AutomationOrderByRelationAggregateInput | undefined

  @TypeGraphQL.Field(_type => StudyGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_StudyGroups?: StudyGroupOrderByRelationAggregateInput | undefined

  @TypeGraphQL.Field(_type => UserOnStudyGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_UserOnStudyGroups?: UserOnStudyGroupOrderByRelationAggregateInput | undefined

  @TypeGraphQL.Field(_type => FriendshipOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FriendshipsInitiated?: FriendshipOrderByRelationAggregateInput | undefined

  @TypeGraphQL.Field(_type => FriendshipOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FriendshipsAccepted?: FriendshipOrderByRelationAggregateInput | undefined
}
