import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFK_TaskLabelInput } from "../inputs/TaskCreateWithoutFK_TaskLabelInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutFK_TaskLabelInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutFK_TaskLabelInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutFK_TaskLabelInput, {
    nullable: false
  })
  create!: TaskCreateWithoutFK_TaskLabelInput;
}
