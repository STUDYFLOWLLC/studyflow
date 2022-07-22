import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogUpdateWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogUpdateWithoutFK_CourseOnTermAutomationInput";
import { AutomationLogWhereUniqueInput } from "../inputs/AutomationLogWhereUniqueInput";

@TypeGraphQL.InputType("AutomationLogUpdateWithWhereUniqueWithoutFK_CourseOnTermAutomationInput", {
  isAbstract: true
})
export class AutomationLogUpdateWithWhereUniqueWithoutFK_CourseOnTermAutomationInput {
  @TypeGraphQL.Field(_type => AutomationLogWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationLogWhereUniqueInput;

  @TypeGraphQL.Field(_type => AutomationLogUpdateWithoutFK_CourseOnTermAutomationInput, {
    nullable: false
  })
  data!: AutomationLogUpdateWithoutFK_CourseOnTermAutomationInput;
}
