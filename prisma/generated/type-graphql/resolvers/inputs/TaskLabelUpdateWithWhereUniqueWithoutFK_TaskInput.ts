import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelUpdateWithoutFK_TaskInput } from "../inputs/TaskLabelUpdateWithoutFK_TaskInput";
import { TaskLabelWhereUniqueInput } from "../inputs/TaskLabelWhereUniqueInput";

@TypeGraphQL.InputType("TaskLabelUpdateWithWhereUniqueWithoutFK_TaskInput", {
  isAbstract: true
})
export class TaskLabelUpdateWithWhereUniqueWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => TaskLabelWhereUniqueInput, {
    nullable: false
  })
  where!: TaskLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskLabelUpdateWithoutFK_TaskInput, {
    nullable: false
  })
  data!: TaskLabelUpdateWithoutFK_TaskInput;
}
