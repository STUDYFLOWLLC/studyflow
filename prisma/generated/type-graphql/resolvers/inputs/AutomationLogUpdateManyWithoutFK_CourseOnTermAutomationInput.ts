import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope } from "../inputs/AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope";
import { AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput";
import { AutomationLogCreateWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateWithoutFK_CourseOnTermAutomationInput";
import { AutomationLogScalarWhereInput } from "../inputs/AutomationLogScalarWhereInput";
import { AutomationLogUpdateManyWithWhereWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogUpdateManyWithWhereWithoutFK_CourseOnTermAutomationInput";
import { AutomationLogUpdateWithWhereUniqueWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogUpdateWithWhereUniqueWithoutFK_CourseOnTermAutomationInput";
import { AutomationLogUpsertWithWhereUniqueWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogUpsertWithWhereUniqueWithoutFK_CourseOnTermAutomationInput";
import { AutomationLogWhereUniqueInput } from "../inputs/AutomationLogWhereUniqueInput";

@TypeGraphQL.InputType("AutomationLogUpdateManyWithoutFK_CourseOnTermAutomationInput", {
  isAbstract: true
})
export class AutomationLogUpdateManyWithoutFK_CourseOnTermAutomationInput {
  @TypeGraphQL.Field(_type => [AutomationLogCreateWithoutFK_CourseOnTermAutomationInput], {
    nullable: true
  })
  create?: AutomationLogCreateWithoutFK_CourseOnTermAutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput], {
    nullable: true
  })
  connectOrCreate?: AutomationLogCreateOrConnectWithoutFK_CourseOnTermAutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogUpsertWithWhereUniqueWithoutFK_CourseOnTermAutomationInput], {
    nullable: true
  })
  upsert?: AutomationLogUpsertWithWhereUniqueWithoutFK_CourseOnTermAutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope, {
    nullable: true
  })
  createMany?: AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogWhereUniqueInput], {
    nullable: true
  })
  set?: AutomationLogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AutomationLogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogWhereUniqueInput], {
    nullable: true
  })
  delete?: AutomationLogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogWhereUniqueInput], {
    nullable: true
  })
  connect?: AutomationLogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogUpdateWithWhereUniqueWithoutFK_CourseOnTermAutomationInput], {
    nullable: true
  })
  update?: AutomationLogUpdateWithWhereUniqueWithoutFK_CourseOnTermAutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogUpdateManyWithWhereWithoutFK_CourseOnTermAutomationInput], {
    nullable: true
  })
  updateMany?: AutomationLogUpdateManyWithWhereWithoutFK_CourseOnTermAutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AutomationLogScalarWhereInput[] | undefined;
}
