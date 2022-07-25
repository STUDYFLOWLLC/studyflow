import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope } from "../inputs/AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope";
import { AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput";
import { AutomationLogCreateWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateWithoutFK_CourseOnTermAutomationInput";
import { AutomationLogWhereUniqueInput } from "../inputs/AutomationLogWhereUniqueInput";

@TypeGraphQL.InputType("AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput", {
  isAbstract: true
})
export class AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput {
  @TypeGraphQL.Field(_type => [AutomationLogCreateWithoutFK_CourseOnTermAutomationInput], {
    nullable: true
  })
  create?: AutomationLogCreateWithoutFK_CourseOnTermAutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput], {
    nullable: true
  })
  connectOrCreate?: AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope, {
    nullable: true
  })
  createMany?: AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogWhereUniqueInput], {
    nullable: true
  })
  connect?: AutomationLogWhereUniqueInput[] | undefined;
}
