import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFK_UserInput } from "../inputs/TaskCreateWithoutFK_UserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: TaskCreateWithoutFK_UserInput;
}
