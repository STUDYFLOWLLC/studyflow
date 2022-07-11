import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_SettingsInput } from "../inputs/UserUpdateOneWithoutFK_SettingsInput";

@TypeGraphQL.InputType("SettingUpdateInput", {
  isAbstract: true
})
export class SettingUpdateInput {
  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  HasSeenWelcomeMessage?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  LastSeenWelcomeMessageAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_SettingsInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_SettingsInput | undefined;
}
