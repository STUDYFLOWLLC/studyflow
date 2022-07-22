import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateWithoutCourseOnTermAutomationsInput";
import { AutomationUpdateWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationUpdateWithoutCourseOnTermAutomationsInput";

@TypeGraphQL.InputType("AutomationUpsertWithoutCourseOnTermAutomationsInput", {
  isAbstract: true
})
export class AutomationUpsertWithoutCourseOnTermAutomationsInput {
  @TypeGraphQL.Field(_type => AutomationUpdateWithoutCourseOnTermAutomationsInput, {
    nullable: false
  })
  update!: AutomationUpdateWithoutCourseOnTermAutomationsInput;

  @TypeGraphQL.Field(_type => AutomationCreateWithoutCourseOnTermAutomationsInput, {
    nullable: false
  })
  create!: AutomationCreateWithoutCourseOnTermAutomationsInput;
}
