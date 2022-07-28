import * as TypeGraphQL from "type-graphql"
import { SetupStep } from "../../enums/SetupStep"
import { Visibility } from "../../enums/Visibility"
import { AutomationCreateNestedManyWithoutFK_UserInput } from "./AutomationCreateNestedManyWithoutFK_UserInput"
import { FlowCreateNestedManyWithoutFK_UserInput } from "./FlowCreateNestedManyWithoutFK_UserInput"
import { FlowViewCreateNestedManyWithoutFK_UserInput } from "./FlowViewCreateNestedManyWithoutFK_UserInput"
import { FriendshipCreateNestedManyWithoutFK_UserFromInput } from "./FriendshipCreateNestedManyWithoutFK_UserFromInput"
import { FriendshipCreateNestedManyWithoutFK_UserToInput } from "./FriendshipCreateNestedManyWithoutFK_UserToInput"
import { SchoolCreateNestedOneWithoutFK_UserInput } from "./SchoolCreateNestedOneWithoutFK_UserInput"
import { SettingCreateNestedOneWithoutFK_UserInput } from "./SettingCreateNestedOneWithoutFK_UserInput"
import { StudyGroupCreateNestedManyWithoutFK_UserInput } from "./StudyGroupCreateNestedManyWithoutFK_UserInput"
import { TaskCreateNestedManyWithoutFK_UserInput } from "./TaskCreateNestedManyWithoutFK_UserInput"
import { UserOnStudyGroupCreateNestedManyWithoutFK_UserInput } from "./UserOnStudyGroupCreateNestedManyWithoutFK_UserInput"

@TypeGraphQL.InputType("UserCreateWithoutFK_TermsInput", {
  isAbstract: true
})
export class UserCreateWithoutFK_TermsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined

  @TypeGraphQL.Field(_type => SetupStep, {
    nullable: true
  })
  SetupStep?: "PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE" | undefined

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SupabaseID!: string

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Email!: string

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Name?: string | undefined

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Username?: string | undefined

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink?: string | undefined

  @TypeGraphQL.Field(_type => SchoolCreateNestedOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_School?: SchoolCreateNestedOneWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Task?: TaskCreateNestedManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => SettingCreateNestedOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_Settings?: SettingCreateNestedOneWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => FlowViewCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FlowView?: FlowViewCreateNestedManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => AutomationCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Automation?: AutomationCreateNestedManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => StudyGroupCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_StudyGroups?: StudyGroupCreateNestedManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_UserOnStudyGroups?: UserOnStudyGroupCreateNestedManyWithoutFK_UserInput | undefined

  @TypeGraphQL.Field(_type => FriendshipCreateNestedManyWithoutFK_UserFromInput, {
    nullable: true
  })
  FK_FriendshipsInitiated?: FriendshipCreateNestedManyWithoutFK_UserFromInput | undefined

  @TypeGraphQL.Field(_type => FriendshipCreateNestedManyWithoutFK_UserToInput, {
    nullable: true
  })
  FK_FriendshipsAccepted?: FriendshipCreateNestedManyWithoutFK_UserToInput | undefined
}
