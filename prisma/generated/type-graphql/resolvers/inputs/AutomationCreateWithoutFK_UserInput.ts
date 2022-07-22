import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput";

@TypeGraphQL.InputType("AutomationCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class AutomationCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RefreshToken!: string;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput, {
    nullable: true
  })
  CourseOnTermAutomations?: CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput | undefined;
}
