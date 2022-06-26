import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelCreateWithoutFK_TaskInput } from "../inputs/TaskLabelCreateWithoutFK_TaskInput";
import { TaskLabelUpdateWithoutFK_TaskInput } from "../inputs/TaskLabelUpdateWithoutFK_TaskInput";
import { TaskLabelWhereUniqueInput } from "../inputs/TaskLabelWhereUniqueInput";

@TypeGraphQL.InputType("TaskLabelUpsertWithWhereUniqueWithoutFK_TaskInput", {
  isAbstract: true
})
export class TaskLabelUpsertWithWhereUniqueWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => TaskLabelWhereUniqueInput, {
    nullable: false
  })
  where!: TaskLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskLabelUpdateWithoutFK_TaskInput, {
    nullable: false
  })
  update!: TaskLabelUpdateWithoutFK_TaskInput;

  @TypeGraphQL.Field(_type => TaskLabelCreateWithoutFK_TaskInput, {
    nullable: false
  })
  create!: TaskLabelCreateWithoutFK_TaskInput;
}
