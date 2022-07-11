import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSetupStepFieldUpdateOperationsInput } from "../inputs/EnumSetupStepFieldUpdateOperationsInput";
import { NullableEnumVisibilityFieldUpdateOperationsInput } from "../inputs/NullableEnumVisibilityFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SchoolUpdateOneWithoutFK_UserInput } from "../inputs/SchoolUpdateOneWithoutFK_UserInput";
import { SettingUpdateOneWithoutFK_UserInput } from "../inputs/SettingUpdateOneWithoutFK_UserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TermUpdateManyWithoutFK_UserInput } from "../inputs/TermUpdateManyWithoutFK_UserInput";

@TypeGraphQL.InputType("UserUpdateWithoutFK_TaskInput", {
  isAbstract: true
})
export class UserUpdateWithoutFK_TaskInput {
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

  @TypeGraphQL.Field(_type => NullableEnumVisibilityFieldUpdateOperationsInput, {
    nullable: true
  })
  DefaultVisibility?: NullableEnumVisibilityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => TermUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Terms?: TermUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SettingUpdateOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_Settings?: SettingUpdateOneWithoutFK_UserInput | undefined;
}
