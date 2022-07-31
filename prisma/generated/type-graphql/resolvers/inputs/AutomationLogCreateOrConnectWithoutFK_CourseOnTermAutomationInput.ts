import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogCreateWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateWithoutFK_CourseOnTermAutomationInput";
import { AutomationLogWhereUniqueInput } from "../inputs/AutomationLogWhereUniqueInput";

@TypeGraphQL.InputType("AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput", {
  isAbstract: true
})
export class AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput {
  @TypeGraphQL.Field(_type => AutomationLogWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationLogWhereUniqueInput;

  @TypeGraphQL.Field(_type => AutomationLogCreateWithoutFK_CourseOnTermAutomationInput, {
    nullable: false
  })
  create!: AutomationLogCreateWithoutFK_CourseOnTermAutomationInput;
}
