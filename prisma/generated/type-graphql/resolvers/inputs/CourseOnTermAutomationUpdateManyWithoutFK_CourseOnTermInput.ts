import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope } from "../inputs/CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope";
import { CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationScalarWhereInput } from "../inputs/CourseOnTermAutomationScalarWhereInput";
import { CourseOnTermAutomationUpdateManyWithWhereWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationUpdateManyWithWhereWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateManyWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateManyWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  create?: CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  upsert?: CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  update?: CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationUpdateManyWithWhereWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  updateMany?: CourseOnTermAutomationUpdateManyWithWhereWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseOnTermAutomationScalarWhereInput[] | undefined;
}
