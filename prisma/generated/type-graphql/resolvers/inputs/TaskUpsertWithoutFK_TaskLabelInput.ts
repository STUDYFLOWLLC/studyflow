import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFK_TaskLabelInput } from "../inputs/TaskCreateWithoutFK_TaskLabelInput";
import { TaskUpdateWithoutFK_TaskLabelInput } from "../inputs/TaskUpdateWithoutFK_TaskLabelInput";

@TypeGraphQL.InputType("TaskUpsertWithoutFK_TaskLabelInput", {
  isAbstract: true
})
export class TaskUpsertWithoutFK_TaskLabelInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutFK_TaskLabelInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutFK_TaskLabelInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutFK_TaskLabelInput, {
    nullable: false
  })
  create!: TaskCreateWithoutFK_TaskLabelInput;
}
