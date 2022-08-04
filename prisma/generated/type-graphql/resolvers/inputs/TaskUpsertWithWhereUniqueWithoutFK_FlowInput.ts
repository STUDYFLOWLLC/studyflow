import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFK_FlowInput } from "../inputs/TaskCreateWithoutFK_FlowInput";
import { TaskUpdateWithoutFK_FlowInput } from "../inputs/TaskUpdateWithoutFK_FlowInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutFK_FlowInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: TaskCreateWithoutFK_FlowInput;
}
