import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationCreateWithoutFK_AutomationInput";
import { CourseOnTermAutomationUpdateWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationUpdateWithoutFK_AutomationInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateWithoutFK_AutomationInput, {
    nullable: false
  })
  update!: CourseOnTermAutomationUpdateWithoutFK_AutomationInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateWithoutFK_AutomationInput, {
    nullable: false
  })
  create!: CourseOnTermAutomationCreateWithoutFK_AutomationInput;
}
