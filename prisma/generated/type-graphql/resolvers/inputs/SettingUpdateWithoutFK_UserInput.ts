import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SettingUpdateWithoutFK_UserInput", {
  isAbstract: true
})
export class SettingUpdateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  HasSeenWelcomeMessage?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  LastSeenWelcomeMessageAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
