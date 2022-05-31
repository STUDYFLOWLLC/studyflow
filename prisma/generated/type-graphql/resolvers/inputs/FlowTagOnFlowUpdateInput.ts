import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagUpdateOneWithoutFK_FlowsInput } from "../inputs/FlowTagUpdateOneWithoutFK_FlowsInput";
import { FlowUpdateOneWithoutFK_TagsInput } from "../inputs/FlowUpdateOneWithoutFK_TagsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpdateInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  HOLDER?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutFK_TagsInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutFK_TagsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagUpdateOneWithoutFK_FlowsInput, {
    nullable: true
  })
  FK_FlowTag?: FlowTagUpdateOneWithoutFK_FlowsInput | undefined;
}
