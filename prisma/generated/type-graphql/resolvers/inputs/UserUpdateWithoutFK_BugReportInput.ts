import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationUpdateManyWithoutFK_UserInput } from "../inputs/AutomationUpdateManyWithoutFK_UserInput";
import { BlogUpdateManyWithoutFK_UserInput } from "../inputs/BlogUpdateManyWithoutFK_UserInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSetupStepFieldUpdateOperationsInput } from "../inputs/EnumSetupStepFieldUpdateOperationsInput";
import { EnumVisibilityFieldUpdateOperationsInput } from "../inputs/EnumVisibilityFieldUpdateOperationsInput";
import { FeatureRequestUpdateManyWithoutFK_UserInput } from "../inputs/FeatureRequestUpdateManyWithoutFK_UserInput";
import { FlowUpdateManyWithoutFK_UserInput } from "../inputs/FlowUpdateManyWithoutFK_UserInput";
import { FlowViewUpdateManyWithoutFK_UserInput } from "../inputs/FlowViewUpdateManyWithoutFK_UserInput";
import { FriendshipUpdateManyWithoutFK_UserFromInput } from "../inputs/FriendshipUpdateManyWithoutFK_UserFromInput";
import { FriendshipUpdateManyWithoutFK_UserToInput } from "../inputs/FriendshipUpdateManyWithoutFK_UserToInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SchoolUpdateOneWithoutFK_UserInput } from "../inputs/SchoolUpdateOneWithoutFK_UserInput";
import { SettingUpdateOneWithoutFK_UserInput } from "../inputs/SettingUpdateOneWithoutFK_UserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { StudyGroupUpdateManyWithoutFK_UserInput } from "../inputs/StudyGroupUpdateManyWithoutFK_UserInput";
import { TaskUpdateManyWithoutFK_UserInput } from "../inputs/TaskUpdateManyWithoutFK_UserInput";
import { TermUpdateManyWithoutFK_UserInput } from "../inputs/TermUpdateManyWithoutFK_UserInput";
import { UserOnStudyGroupUpdateManyWithoutFK_UserInput } from "../inputs/UserOnStudyGroupUpdateManyWithoutFK_UserInput";

@TypeGraphQL.InputType("UserUpdateWithoutFK_BugReportInput", {
  isAbstract: true
})
export class UserUpdateWithoutFK_BugReportInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumSetupStepFieldUpdateOperationsInput, {
    nullable: true
  })
  SetupStep?: EnumSetupStepFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  SupabaseID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFieldUpdateOperationsInput, {
    nullable: true
  })
  DefaultVisibility?: EnumVisibilityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Bio?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  About?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Username?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ProfilePictureLink?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  HasRequestedAutomationAccess?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  HasAutomationAccess?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => TermUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Terms?: TermUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Task?: TaskUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SettingUpdateOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_Settings?: SettingUpdateOneWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FlowView?: FlowViewUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => AutomationUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Automation?: AutomationUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_StudyGroups?: StudyGroupUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_UserOnStudyGroups?: UserOnStudyGroupUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipUpdateManyWithoutFK_UserFromInput, {
    nullable: true
  })
  FK_FriendshipsInitiated?: FriendshipUpdateManyWithoutFK_UserFromInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipUpdateManyWithoutFK_UserToInput, {
    nullable: true
  })
  FK_FriendshipsAccepted?: FriendshipUpdateManyWithoutFK_UserToInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Blog?: BlogUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FeatureRequest?: FeatureRequestUpdateManyWithoutFK_UserInput | undefined;
}
