import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_FlowInputEnvelope } from "../inputs/TaskCreateManyFK_FlowInputEnvelope";
import { TaskCreateOrConnectWithoutFK_FlowInput } from "../inputs/TaskCreateOrConnectWithoutFK_FlowInput";
import { TaskCreateWithoutFK_FlowInput } from "../inputs/TaskCreateWithoutFK_FlowInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutFK_FlowInput } from "../inputs/TaskUpdateManyWithWhereWithoutFK_FlowInput";
import { TaskUpdateWithWhereUniqueWithoutFK_FlowInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutFK_FlowInput";
import { TaskUpsertWithWhereUniqueWithoutFK_FlowInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutFK_FlowInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: TaskCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutFK_FlowInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
