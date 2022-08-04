import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_UserInputEnvelope } from "../inputs/TaskCreateManyFK_UserInputEnvelope";
import { TaskCreateOrConnectWithoutFK_UserInput } from "../inputs/TaskCreateOrConnectWithoutFK_UserInput";
import { TaskCreateWithoutFK_UserInput } from "../inputs/TaskCreateWithoutFK_UserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: TaskCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
