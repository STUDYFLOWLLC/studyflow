import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationOrderByRelationAggregateInput } from "../inputs/AutomationOrderByRelationAggregateInput";
import { BlogOrderByRelationAggregateInput } from "../inputs/BlogOrderByRelationAggregateInput";
import { BugReportOrderByRelationAggregateInput } from "../inputs/BugReportOrderByRelationAggregateInput";
import { FeatureRequestOrderByRelationAggregateInput } from "../inputs/FeatureRequestOrderByRelationAggregateInput";
import { FlowOrderByRelationAggregateInput } from "../inputs/FlowOrderByRelationAggregateInput";
import { FlowViewOrderByRelationAggregateInput } from "../inputs/FlowViewOrderByRelationAggregateInput";
import { FriendshipOrderByRelationAggregateInput } from "../inputs/FriendshipOrderByRelationAggregateInput";
import { SchoolOrderByWithRelationInput } from "../inputs/SchoolOrderByWithRelationInput";
import { SettingOrderByWithRelationInput } from "../inputs/SettingOrderByWithRelationInput";
import { StudyGroupOrderByRelationAggregateInput } from "../inputs/StudyGroupOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { TermOrderByRelationAggregateInput } from "../inputs/TermOrderByRelationAggregateInput";
import { UserOnStudyGroupOrderByRelationAggregateInput } from "../inputs/UserOnStudyGroupOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SetupStep?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SupabaseID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultVisibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Bio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  About?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProfilePictureLink?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchoolOrderByWithRelationInput, {
    nullable: true
  })
  FK_School?: SchoolOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_SchoolID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TermOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Terms?: TermOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Task?: TaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingOrderByWithRelationInput, {
    nullable: true
  })
  FK_Settings?: SettingOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FlowView?: FlowViewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Flow?: FlowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Automation?: AutomationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_StudyGroups?: StudyGroupOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_UserOnStudyGroups?: UserOnStudyGroupOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FriendshipsInitiated?: FriendshipOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FriendshipsAccepted?: FriendshipOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlogOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Blog?: BlogOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BugReportOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_BugReport?: BugReportOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FeatureRequest?: FeatureRequestOrderByRelationAggregateInput | undefined;
}
