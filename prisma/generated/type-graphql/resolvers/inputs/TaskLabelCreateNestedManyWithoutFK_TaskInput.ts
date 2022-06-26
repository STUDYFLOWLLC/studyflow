import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelCreateManyFK_TaskInputEnvelope } from "../inputs/TaskLabelCreateManyFK_TaskInputEnvelope";
import { TaskLabelCreateOrConnectWithoutFK_TaskInput } from "../inputs/TaskLabelCreateOrConnectWithoutFK_TaskInput";
import { TaskLabelCreateWithoutFK_TaskInput } from "../inputs/TaskLabelCreateWithoutFK_TaskInput";
import { TaskLabelWhereUniqueInput } from "../inputs/TaskLabelWhereUniqueInput";

@TypeGraphQL.InputType("TaskLabelCreateNestedManyWithoutFK_TaskInput", {
  isAbstract: true
})
export class TaskLabelCreateNestedManyWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => [TaskLabelCreateWithoutFK_TaskInput], {
    nullable: true
  })
  create?: TaskLabelCreateWithoutFK_TaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelCreateOrConnectWithoutFK_TaskInput], {
    nullable: true
  })
  connectOrCreate?: TaskLabelCreateOrConnectWithoutFK_TaskInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskLabelCreateManyFK_TaskInputEnvelope, {
    nullable: true
  })
  createMany?: TaskLabelCreateManyFK_TaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskLabelWhereUniqueInput[] | undefined;
}
