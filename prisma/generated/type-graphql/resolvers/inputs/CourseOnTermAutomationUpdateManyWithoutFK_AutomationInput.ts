import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope } from "../inputs/CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope";
import { CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput";
import { CourseOnTermAutomationCreateWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationCreateWithoutFK_AutomationInput";
import { CourseOnTermAutomationScalarWhereInput } from "../inputs/CourseOnTermAutomationScalarWhereInput";
import { CourseOnTermAutomationUpdateManyWithWhereWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationUpdateManyWithWhereWithoutFK_AutomationInput";
import { CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_AutomationInput";
import { CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_AutomationInput } from "../inputs/CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_AutomationInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateManyWithoutFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateManyWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateWithoutFK_AutomationInput], {
    nullable: true
  })
  create?: CourseOnTermAutomationCreateWithoutFK_AutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnTermAutomationCreateOrConnectWithoutFK_AutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_AutomationInput], {
    nullable: true
  })
  upsert?: CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_AutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationWhereUniqueInput], {
    nullable: true
  })
  set?: CourseOnTermAutomationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CourseOnTermAutomationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationWhereUniqueInput], {
    nullable: true
  })
  delete?: CourseOnTermAutomationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseOnTermAutomationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_AutomationInput], {
    nullable: true
  })
  update?: CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_AutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationUpdateManyWithWhereWithoutFK_AutomationInput], {
    nullable: true
  })
  updateMany?: CourseOnTermAutomationUpdateManyWithWhereWithoutFK_AutomationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseOnTermAutomationScalarWhereInput[] | undefined;
}
