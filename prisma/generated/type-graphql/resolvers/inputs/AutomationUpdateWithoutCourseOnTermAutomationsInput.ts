import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_AutomationInput } from "../inputs/UserUpdateOneWithoutFK_AutomationInput";

@TypeGraphQL.InputType("AutomationUpdateWithoutCourseOnTermAutomationsInput", {
  isAbstract: true
})
export class AutomationUpdateWithoutCourseOnTermAutomationsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  RefreshToken?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_AutomationInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_AutomationInput | undefined;
}
