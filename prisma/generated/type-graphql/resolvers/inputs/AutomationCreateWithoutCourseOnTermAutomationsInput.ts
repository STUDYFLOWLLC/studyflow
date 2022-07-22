import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_AutomationInput } from "../inputs/UserCreateNestedOneWithoutFK_AutomationInput";

@TypeGraphQL.InputType("AutomationCreateWithoutCourseOnTermAutomationsInput", {
  isAbstract: true
})
export class AutomationCreateWithoutCourseOnTermAutomationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RefreshToken!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_AutomationInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_AutomationInput | undefined;
}
