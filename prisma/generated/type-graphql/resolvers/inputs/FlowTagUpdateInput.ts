import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowTagOnFlowUpdateManyWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowUpdateManyWithoutFK_FlowTagInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_FlowTagsInput } from "../inputs/UserUpdateOneWithoutFK_FlowTagsInput";

@TypeGraphQL.InputType("FlowTagUpdateInput", {
  isAbstract: true
})
export class FlowTagUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_FlowTagsInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_FlowTagsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateManyWithoutFK_FlowTagInput, {
    nullable: true
  })
  FK_Flows?: FlowTagOnFlowUpdateManyWithoutFK_FlowTagInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  Public?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;
}
