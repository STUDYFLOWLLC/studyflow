import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_TasksInput } from "../inputs/FlowCreateOrConnectWithoutFK_TasksInput";
import { FlowCreateWithoutFK_TasksInput } from "../inputs/FlowCreateWithoutFK_TasksInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedOneWithoutFK_TasksInput", {
  isAbstract: true
})
export class FlowCreateNestedOneWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_TasksInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_TasksInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;
}
