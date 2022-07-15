import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowUpdateOneWithoutFK_FlowViewInput } from "../inputs/FlowUpdateOneWithoutFK_FlowViewInput";
import { UserUpdateOneWithoutFK_FlowViewInput } from "../inputs/UserUpdateOneWithoutFK_FlowViewInput";

@TypeGraphQL.InputType("FlowViewUpdateInput", {
  isAbstract: true
})
export class FlowViewUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutFK_FlowViewInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_FlowViewInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_FlowViewInput | undefined;
}
