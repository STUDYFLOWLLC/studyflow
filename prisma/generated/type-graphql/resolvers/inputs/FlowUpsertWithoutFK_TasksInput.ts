import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_TasksInput } from "../inputs/FlowCreateWithoutFK_TasksInput";
import { FlowUpdateWithoutFK_TasksInput } from "../inputs/FlowUpdateWithoutFK_TasksInput";

@TypeGraphQL.InputType("FlowUpsertWithoutFK_TasksInput", {
  isAbstract: true
})
export class FlowUpsertWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_TasksInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFK_TasksInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_TasksInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_TasksInput;
}
