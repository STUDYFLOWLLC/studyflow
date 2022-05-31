import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { FlashCardStackUpdateManyWithoutFK_UserInput } from "../inputs/FlashCardStackUpdateManyWithoutFK_UserInput";
import { FlowTagUpdateManyWithoutFK_UserInput } from "../inputs/FlowTagUpdateManyWithoutFK_UserInput";
import { FlowUpdateManyWithoutFK_UserInput } from "../inputs/FlowUpdateManyWithoutFK_UserInput";
import { NullableEnumVisibilityFieldUpdateOperationsInput } from "../inputs/NullableEnumVisibilityFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutFK_CoursesInput", {
  isAbstract: true
})
export class UserUpdateWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  SetupComplete?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  SupabaseID?: StringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => FlowUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Flows?: FlowUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FlowTags?: FlowTagUpdateManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackUpdateManyWithoutFK_UserInput | undefined;
}
