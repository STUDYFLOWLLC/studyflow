import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_FlowViewInput } from "../inputs/UserUpdateOneWithoutFK_FlowViewInput";

@TypeGraphQL.InputType("FlowViewUpdateWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowViewUpdateWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_FlowViewInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_FlowViewInput | undefined;
}
