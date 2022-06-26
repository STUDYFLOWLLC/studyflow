import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelCreateWithoutFK_TaskInput } from "../inputs/TaskLabelCreateWithoutFK_TaskInput";
import { TaskLabelWhereUniqueInput } from "../inputs/TaskLabelWhereUniqueInput";

@TypeGraphQL.InputType("TaskLabelCreateOrConnectWithoutFK_TaskInput", {
  isAbstract: true
})
export class TaskLabelCreateOrConnectWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => TaskLabelWhereUniqueInput, {
    nullable: false
  })
  where!: TaskLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskLabelCreateWithoutFK_TaskInput, {
    nullable: false
  })
  create!: TaskLabelCreateWithoutFK_TaskInput;
}
