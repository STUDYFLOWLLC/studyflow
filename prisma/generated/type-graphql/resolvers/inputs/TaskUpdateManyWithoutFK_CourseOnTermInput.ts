import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_CourseOnTermInputEnvelope } from "../inputs/TaskCreateManyFK_CourseOnTermInputEnvelope";
import { TaskCreateOrConnectWithoutFK_CourseOnTermInput } from "../inputs/TaskCreateOrConnectWithoutFK_CourseOnTermInput";
import { TaskCreateWithoutFK_CourseOnTermInput } from "../inputs/TaskCreateWithoutFK_CourseOnTermInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutFK_CourseOnTermInput } from "../inputs/TaskUpdateManyWithWhereWithoutFK_CourseOnTermInput";
import { TaskUpdateWithWhereUniqueWithoutFK_CourseOnTermInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutFK_CourseOnTermInput";
import { TaskUpsertWithWhereUniqueWithoutFK_CourseOnTermInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutFK_CourseOnTermInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  create?: TaskCreateWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyFK_CourseOnTermInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyFK_CourseOnTermInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
