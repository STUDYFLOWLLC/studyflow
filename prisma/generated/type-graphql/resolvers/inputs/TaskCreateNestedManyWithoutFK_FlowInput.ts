import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_FlowInputEnvelope } from "../inputs/TaskCreateManyFK_FlowInputEnvelope";
import { TaskCreateOrConnectWithoutFK_FlowInput } from "../inputs/TaskCreateOrConnectWithoutFK_FlowInput";
import { TaskCreateWithoutFK_FlowInput } from "../inputs/TaskCreateWithoutFK_FlowInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: TaskCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
