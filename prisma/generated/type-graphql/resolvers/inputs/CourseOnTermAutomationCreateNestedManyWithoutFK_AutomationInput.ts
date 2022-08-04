import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope } from "../inputs/CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope";
import { CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput";
import { CourseOnTermAutomationCreateWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationCreateWithoutFK_AutomationInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateNestedManyWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateWithoutFK_AutomationInput], {
    nullable: true
  })
  create?: CourseOnTermAutomationCreateWithoutFK_AutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseOnTermAutomationWhereUniqueInput[] | undefined;
}
