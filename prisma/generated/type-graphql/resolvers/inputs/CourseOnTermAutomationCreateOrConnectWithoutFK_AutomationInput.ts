import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationCreateWithoutFK_AutomationInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateWithoutFK_AutomationInput, {
    nullable: false
  })
  create!: CourseOnTermAutomationCreateWithoutFK_AutomationInput;
}
