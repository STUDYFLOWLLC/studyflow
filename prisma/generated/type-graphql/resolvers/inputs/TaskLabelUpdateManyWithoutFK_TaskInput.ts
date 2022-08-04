import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelCreateManyFK_TaskInputEnvelope } from "../inputs/TaskLabelCreateManyFK_TaskInputEnvelope";
import { TaskLabelCreateOrConnectWithoutFK_TaskInput } from "../inputs/TaskLabelCreateOrConnectWithoutFK_TaskInput";
import { TaskLabelCreateWithoutFK_TaskInput } from "../inputs/TaskLabelCreateWithoutFK_TaskInput";
import { TaskLabelScalarWhereInput } from "../inputs/TaskLabelScalarWhereInput";
import { TaskLabelUpdateManyWithWhereWithoutFK_TaskInput } from "../inputs/TaskLabelUpdateManyWithWhereWithoutFK_TaskInput";
import { TaskLabelUpdateWithWhereUniqueWithoutFK_TaskInput } from "../inputs/TaskLabelUpdateWithWhereUniqueWithoutFK_TaskInput";
import { TaskLabelUpsertWithWhereUniqueWithoutFK_TaskInput } from "../inputs/TaskLabelUpsertWithWhereUniqueWithoutFK_TaskInput";
import { TaskLabelWhereUniqueInput } from "../inputs/TaskLabelWhereUniqueInput";

@TypeGraphQL.InputType("TaskLabelUpdateManyWithoutFK_TaskInput", {
  isAbstract: true
})
export class TaskLabelUpdateManyWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => [TaskLabelCreateWithoutFK_TaskInput], {
    nullable: true
  })
  create?: TaskLabelCreateWithoutFK_TaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelCreateOrConnectWithoutFK_TaskInput], {
    nullable: true
  })
  connectOrCreate?: TaskLabelCreateOrConnectWithoutFK_TaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelUpsertWithWhereUniqueWithoutFK_TaskInput], {
    nullable: true
  })
  upsert?: TaskLabelUpsertWithWhereUniqueWithoutFK_TaskInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskLabelCreateManyFK_TaskInputEnvelope, {
    nullable: true
  })
  createMany?: TaskLabelCreateManyFK_TaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelWhereUniqueInput], {
    nullable: true
  })
  set?: TaskLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelUpdateWithWhereUniqueWithoutFK_TaskInput], {
    nullable: true
  })
  update?: TaskLabelUpdateWithWhereUniqueWithoutFK_TaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelUpdateManyWithWhereWithoutFK_TaskInput], {
    nullable: true
  })
  updateMany?: TaskLabelUpdateManyWithWhereWithoutFK_TaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskLabelScalarWhereInput[] | undefined;
}
