import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlashCardStackUpdateManyWithoutFK_FlowInput } from "../inputs/FlashCardStackUpdateManyWithoutFK_FlowInput";
import { FlowTagOnFlowUpdateManyWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowUpdateManyWithoutFK_FlowInput";
import { NullableEnumVisibilityFieldUpdateOperationsInput } from "../inputs/NullableEnumVisibilityFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_FlowsInput } from "../inputs/UserUpdateOneWithoutFK_FlowsInput";

@TypeGraphQL.InputType("FlowUpdateInput", {
  isAbstract: true
})
export class FlowUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_FlowsInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_Tags?: FlowTagOnFlowUpdateManyWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackUpdateManyWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Body?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumVisibilityFieldUpdateOperationsInput, {
    nullable: true
  })
  Visibility?: NullableEnumVisibilityFieldUpdateOperationsInput | undefined;
}
