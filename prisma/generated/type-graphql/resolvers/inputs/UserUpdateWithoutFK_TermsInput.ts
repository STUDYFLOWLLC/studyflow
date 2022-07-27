import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationUpdateManyWithoutFK_UserInput } from "../inputs/AutomationUpdateManyWithoutFK_UserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSetupStepFieldUpdateOperationsInput } from "../inputs/EnumSetupStepFieldUpdateOperationsInput";
import { EnumVisibilityFieldUpdateOperationsInput } from "../inputs/EnumVisibilityFieldUpdateOperationsInput";
import { FlowUpdateManyWithoutFK_UserInput } from "../inputs/FlowUpdateManyWithoutFK_UserInput";
import { FlowViewUpdateManyWithoutFK_UserInput } from "../inputs/FlowViewUpdateManyWithoutFK_UserInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SchoolUpdateOneWithoutFK_UserInput } from "../inputs/SchoolUpdateOneWithoutFK_UserInput";
import { SettingUpdateOneWithoutFK_UserInput } from "../inputs/SettingUpdateOneWithoutFK_UserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutFK_UserInput } from "../inputs/TaskUpdateManyWithoutFK_UserInput";

@TypeGraphQL.InputType("UserUpdateWithoutFK_TermsInput", {
  isAbstract: true
})
export class UserUpdateWithoutFK_TermsInput {
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
  Name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Username?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ProfilePictureLink?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutFK_UserInput | undefined;

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
}
