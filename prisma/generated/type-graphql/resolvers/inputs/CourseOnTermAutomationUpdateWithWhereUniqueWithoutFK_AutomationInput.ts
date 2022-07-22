import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationUpdateWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationUpdateWithoutFK_AutomationInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateWithoutFK_AutomationInput, {
    nullable: false
  })
  data!: CourseOnTermAutomationUpdateWithoutFK_AutomationInput;
}
