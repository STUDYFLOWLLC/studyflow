import * as TypeGraphQL from "type-graphql"
import { AutomationUpdateManyWithoutFK_UserInput } from "./AutomationUpdateManyWithoutFK_UserInput"
import { DateTimeFieldUpdateOperationsInput } from "./DateTimeFieldUpdateOperationsInput"
import { EnumSetupStepFieldUpdateOperationsInput } from "./EnumSetupStepFieldUpdateOperationsInput"
import { EnumVisibilityFieldUpdateOperationsInput } from "./EnumVisibilityFieldUpdateOperationsInput"
import { FlowUpdateManyWithoutFK_UserInput } from "./FlowUpdateManyWithoutFK_UserInput"
import { FlowViewUpdateManyWithoutFK_UserInput } from "./FlowViewUpdateManyWithoutFK_UserInput"
import { FriendshipUpdateManyWithoutFK_UserFromInput } from "./FriendshipUpdateManyWithoutFK_UserFromInput"
import { FriendshipUpdateManyWithoutFK_UserToInput } from "./FriendshipUpdateManyWithoutFK_UserToInput"
import { NullableStringFieldUpdateOperationsInput } from "./NullableStringFieldUpdateOperationsInput"
import { SchoolUpdateOneWithoutFK_UserInput } from "./SchoolUpdateOneWithoutFK_UserInput"
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput"
import { StudyGroupUpdateManyWithoutFK_UserInput } from "./StudyGroupUpdateManyWithoutFK_UserInput"
import { TaskUpdateManyWithoutFK_UserInput } from "./TaskUpdateManyWithoutFK_UserInput"
import { TermUpdateManyWithoutFK_UserInput } from "./TermUpdateManyWithoutFK_UserInput"
import { UserOnStudyGroupUpdateManyWithoutFK_UserInput } from "./UserOnStudyGroupUpdateManyWithoutFK_UserInput"

@TypeGraphQL.InputType("UserUpdateWithoutFK_SettingsInput", {
  isAbstract: true
})
export class UserUpdateWithoutFK_SettingsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => EnumSetupStepFieldUpdateOperationsInput, {
    nullable: true
  })
  SetupStep?: EnumSetupStepFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  SupabaseID?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => EnumVisibilityFieldUpdateOperationsInput, {
    nullable: true
  })
  DefaultVisibility?: EnumVisibilityFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Email?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: NullableStringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Username?: NullableStringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ProfilePictureLink?: NullableStringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => TermUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Terms?: TermUpdateManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Task?: TaskUpdateManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => FlowViewUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FlowView?: FlowViewUpdateManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => FlowUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => AutomationUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Automation?: AutomationUpdateManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => StudyGroupUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_StudyGroups?: StudyGroupUpdateManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_UserOnStudyGroups?: UserOnStudyGroupUpdateManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => FriendshipUpdateManyWithoutFK_UserFromInput, {
    nullable: true
  })
  FK_FriendshipsInitiated?: FriendshipUpdateManyWithoutFK_UserFromInput | undefined

  @TypeGraphQL.Field(_type => FriendshipUpdateManyWithoutFK_UserToInput, {
    nullable: true
  })
  FK_FriendshipsAccepted?: FriendshipUpdateManyWithoutFK_UserToInput | undefined
}
