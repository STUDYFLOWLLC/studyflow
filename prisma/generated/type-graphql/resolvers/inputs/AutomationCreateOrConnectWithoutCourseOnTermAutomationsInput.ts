import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateWithoutCourseOnTermAutomationsInput";
import { AutomationWhereUniqueInput } from "../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.InputType("AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput", {
  isAbstract: true
})
export class AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput {
  @TypeGraphQL.Field(_type => AutomationWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AutomationCreateWithoutCourseOnTermAutomationsInput, {
    nullable: false
  })
  create!: AutomationCreateWithoutCourseOnTermAutomationsInput;
}
