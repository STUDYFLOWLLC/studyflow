import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput";
import { UserCreateNestedOneWithoutFK_AutomationInput } from "../inputs/UserCreateNestedOneWithoutFK_AutomationInput";

@TypeGraphQL.InputType("AutomationCreateInput", {
  isAbstract: true
})
export class AutomationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RefreshToken!: string;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput, {
    nullable: true
  })
  CourseOnTermAutomations?: CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_AutomationInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_AutomationInput | undefined;
}
