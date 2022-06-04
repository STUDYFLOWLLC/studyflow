import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyCourseOnTermInputEnvelope } from "../inputs/FlowCreateManyCourseOnTermInputEnvelope";
import { FlowCreateOrConnectWithoutCourseOnTermInput } from "../inputs/FlowCreateOrConnectWithoutCourseOnTermInput";
import { FlowCreateWithoutCourseOnTermInput } from "../inputs/FlowCreateWithoutCourseOnTermInput";
import { FlowScalarWhereInput } from "../inputs/FlowScalarWhereInput";
import { FlowUpdateManyWithWhereWithoutCourseOnTermInput } from "../inputs/FlowUpdateManyWithWhereWithoutCourseOnTermInput";
import { FlowUpdateWithWhereUniqueWithoutCourseOnTermInput } from "../inputs/FlowUpdateWithWhereUniqueWithoutCourseOnTermInput";
import { FlowUpsertWithWhereUniqueWithoutCourseOnTermInput } from "../inputs/FlowUpsertWithWhereUniqueWithoutCourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateManyWithoutCourseOnTermInput", {
  isAbstract: true
})
export class FlowUpdateManyWithoutCourseOnTermInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutCourseOnTermInput], {
    nullable: true
  })
  create?: FlowCreateWithoutCourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutCourseOnTermInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutCourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpsertWithWhereUniqueWithoutCourseOnTermInput], {
    nullable: true
  })
  upsert?: FlowUpsertWithWhereUniqueWithoutCourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyCourseOnTermInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyCourseOnTermInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  set?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  delete?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpdateWithWhereUniqueWithoutCourseOnTermInput], {
    nullable: true
  })
  update?: FlowUpdateWithWhereUniqueWithoutCourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpdateManyWithWhereWithoutCourseOnTermInput], {
    nullable: true
  })
  updateMany?: FlowUpdateManyWithWhereWithoutCourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowScalarWhereInput[] | undefined;
}
