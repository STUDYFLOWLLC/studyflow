import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_UserInputEnvelope } from "../inputs/TaskCreateManyFK_UserInputEnvelope";
import { TaskCreateOrConnectWithoutFK_UserInput } from "../inputs/TaskCreateOrConnectWithoutFK_UserInput";
import { TaskCreateWithoutFK_UserInput } from "../inputs/TaskCreateWithoutFK_UserInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/TaskUpdateManyWithWhereWithoutFK_UserInput";
import { TaskUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutFK_UserInput";
import { TaskUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutFK_UserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: TaskCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyFK_UserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
