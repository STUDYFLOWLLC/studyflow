import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutFK_TaskLabelInput } from "../inputs/TaskCreateOrConnectWithoutFK_TaskLabelInput";
import { TaskCreateWithoutFK_TaskLabelInput } from "../inputs/TaskCreateWithoutFK_TaskLabelInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutFK_TaskLabelInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutFK_TaskLabelInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutFK_TaskLabelInput, {
    nullable: true
  })
  create?: TaskCreateWithoutFK_TaskLabelInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutFK_TaskLabelInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_TaskLabelInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
