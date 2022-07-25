import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput";
import { AutomationCreateWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateWithoutCourseOnTermAutomationsInput";
import { AutomationWhereUniqueInput } from "../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.InputType("AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput", {
  isAbstract: true
})
export class AutomationCreateNestedOneWithoutCourseOnTermAutomationsInput {
  @TypeGraphQL.Field(_type => AutomationCreateWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  create?: AutomationCreateWithoutCourseOnTermAutomationsInput | undefined;

  @TypeGraphQL.Field(_type => AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  connectOrCreate?: AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput | undefined;

  @TypeGraphQL.Field(_type => AutomationWhereUniqueInput, {
    nullable: true
  })
  connect?: AutomationWhereUniqueInput | undefined;
}
