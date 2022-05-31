import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagUpdateOneWithoutFK_FlowsInput } from "../inputs/FlowTagUpdateOneWithoutFK_FlowsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpdateWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpdateWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  HOLDER?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagUpdateOneWithoutFK_FlowsInput, {
    nullable: true
  })
  FK_FlowTag?: FlowTagUpdateOneWithoutFK_FlowsInput | undefined;
}
