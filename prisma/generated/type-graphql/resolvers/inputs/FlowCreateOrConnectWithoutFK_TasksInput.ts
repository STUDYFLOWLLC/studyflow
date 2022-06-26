import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_TasksInput } from "../inputs/FlowCreateWithoutFK_TasksInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutFK_TasksInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_TasksInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_TasksInput;
}
