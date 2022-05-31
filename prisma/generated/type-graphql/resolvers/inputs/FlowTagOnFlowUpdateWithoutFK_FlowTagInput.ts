import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowUpdateOneWithoutFK_TagsInput } from "../inputs/FlowUpdateOneWithoutFK_TagsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpdateWithoutFK_FlowTagInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpdateWithoutFK_FlowTagInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  HOLDER?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutFK_TagsInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutFK_TagsInput | undefined;
}
