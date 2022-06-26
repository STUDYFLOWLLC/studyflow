import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyFK_CourseOnTermInputEnvelope } from "../inputs/FlowCreateManyFK_CourseOnTermInputEnvelope";
import { FlowCreateOrConnectWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateOrConnectWithoutFK_CourseOnTermInput";
import { FlowCreateWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateWithoutFK_CourseOnTermInput";
import { FlowScalarWhereInput } from "../inputs/FlowScalarWhereInput";
import { FlowUpdateManyWithWhereWithoutFK_CourseOnTermInput } from "../inputs/FlowUpdateManyWithWhereWithoutFK_CourseOnTermInput";
import { FlowUpdateWithWhereUniqueWithoutFK_CourseOnTermInput } from "../inputs/FlowUpdateWithWhereUniqueWithoutFK_CourseOnTermInput";
import { FlowUpsertWithWhereUniqueWithoutFK_CourseOnTermInput } from "../inputs/FlowUpsertWithWhereUniqueWithoutFK_CourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateManyWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class FlowUpdateManyWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  create?: FlowCreateWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpsertWithWhereUniqueWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  upsert?: FlowUpsertWithWhereUniqueWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyFK_CourseOnTermInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyFK_CourseOnTermInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FlowUpdateWithWhereUniqueWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  update?: FlowUpdateWithWhereUniqueWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpdateManyWithWhereWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  updateMany?: FlowUpdateManyWithWhereWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowScalarWhereInput[] | undefined;
}
