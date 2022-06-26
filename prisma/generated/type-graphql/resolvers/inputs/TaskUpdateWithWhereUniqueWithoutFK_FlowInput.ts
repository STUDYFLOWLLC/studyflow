import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutFK_FlowInput } from "../inputs/TaskUpdateWithoutFK_FlowInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutFK_FlowInput;
}
