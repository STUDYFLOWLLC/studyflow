import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_RepetitionInputEnvelope } from "../inputs/TaskCreateManyFK_RepetitionInputEnvelope";
import { TaskCreateOrConnectWithoutFK_RepetitionInput } from "../inputs/TaskCreateOrConnectWithoutFK_RepetitionInput";
import { TaskCreateWithoutFK_RepetitionInput } from "../inputs/TaskCreateWithoutFK_RepetitionInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutFK_RepetitionInput } from "../inputs/TaskUpdateManyWithWhereWithoutFK_RepetitionInput";
import { TaskUpdateWithWhereUniqueWithoutFK_RepetitionInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutFK_RepetitionInput";
import { TaskUpsertWithWhereUniqueWithoutFK_RepetitionInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutFK_RepetitionInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutFK_RepetitionInput], {
    nullable: true
  })
  create?: TaskCreateWithoutFK_RepetitionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutFK_RepetitionInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_RepetitionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutFK_RepetitionInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutFK_RepetitionInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyFK_RepetitionInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyFK_RepetitionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutFK_RepetitionInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutFK_RepetitionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutFK_RepetitionInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutFK_RepetitionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
