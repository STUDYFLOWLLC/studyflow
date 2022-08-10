import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateNestedManyWithoutFK_UserInput } from "../inputs/AutomationCreateNestedManyWithoutFK_UserInput";
import { BlogCreateNestedManyWithoutFK_UserInput } from "../inputs/BlogCreateNestedManyWithoutFK_UserInput";
import { BugReportCreateNestedManyWithoutFK_UserInput } from "../inputs/BugReportCreateNestedManyWithoutFK_UserInput";
import { FeatureRequestCreateNestedManyWithoutFK_UserInput } from "../inputs/FeatureRequestCreateNestedManyWithoutFK_UserInput";
import { FlowCreateNestedManyWithoutFK_UserInput } from "../inputs/FlowCreateNestedManyWithoutFK_UserInput";
import { FlowViewCreateNestedManyWithoutFK_UserInput } from "../inputs/FlowViewCreateNestedManyWithoutFK_UserInput";
import { FriendshipCreateNestedManyWithoutFK_UserFromInput } from "../inputs/FriendshipCreateNestedManyWithoutFK_UserFromInput";
import { FriendshipCreateNestedManyWithoutFK_UserToInput } from "../inputs/FriendshipCreateNestedManyWithoutFK_UserToInput";
import { SettingCreateNestedOneWithoutFK_UserInput } from "../inputs/SettingCreateNestedOneWithoutFK_UserInput";
import { StudyGroupCreateNestedManyWithoutFK_UserInput } from "../inputs/StudyGroupCreateNestedManyWithoutFK_UserInput";
import { TaskCreateNestedManyWithoutFK_UserInput } from "../inputs/TaskCreateNestedManyWithoutFK_UserInput";
import { TermCreateNestedManyWithoutFK_UserInput } from "../inputs/TermCreateNestedManyWithoutFK_UserInput";
import { UserOnStudyGroupCreateNestedManyWithoutFK_UserInput } from "../inputs/UserOnStudyGroupCreateNestedManyWithoutFK_UserInput";
import { SetupStep } from "../../enums/SetupStep";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("UserCreateWithoutFK_SchoolInput", {
  isAbstract: true
})
export class UserCreateWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => SetupStep, {
    nullable: true
  })
  SetupStep?: "PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SupabaseID!: string;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Bio?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  About?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasRequestedAutomationAccess?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasAutomationAccess?: boolean | undefined;

  @TypeGraphQL.Field(_type => TermCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Terms?: TermCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Task?: TaskCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SettingCreateNestedOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_Settings?: SettingCreateNestedOneWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FlowView?: FlowViewCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => AutomationCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Automation?: AutomationCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_StudyGroups?: StudyGroupCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_UserOnStudyGroups?: UserOnStudyGroupCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateNestedManyWithoutFK_UserFromInput, {
    nullable: true
  })
  FK_FriendshipsInitiated?: FriendshipCreateNestedManyWithoutFK_UserFromInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateNestedManyWithoutFK_UserToInput, {
    nullable: true
  })
  FK_FriendshipsAccepted?: FriendshipCreateNestedManyWithoutFK_UserToInput | undefined;

  @TypeGraphQL.Field(_type => BlogCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Blog?: BlogCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => BugReportCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_BugReport?: BugReportCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FeatureRequest?: FeatureRequestCreateNestedManyWithoutFK_UserInput | undefined;
}
