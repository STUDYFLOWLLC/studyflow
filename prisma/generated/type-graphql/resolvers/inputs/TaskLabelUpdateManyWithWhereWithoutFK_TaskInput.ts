import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelScalarWhereInput } from "../inputs/TaskLabelScalarWhereInput";
import { TaskLabelUpdateManyMutationInput } from "../inputs/TaskLabelUpdateManyMutationInput";

@TypeGraphQL.InputType("TaskLabelUpdateManyWithWhereWithoutFK_TaskInput", {
  isAbstract: true
})
export class TaskLabelUpdateManyWithWhereWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => TaskLabelScalarWhereInput, {
    nullable: false
  })
  where!: TaskLabelScalarWhereInput;

  @TypeGraphQL.Field(_type => TaskLabelUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskLabelUpdateManyMutationInput;
}
