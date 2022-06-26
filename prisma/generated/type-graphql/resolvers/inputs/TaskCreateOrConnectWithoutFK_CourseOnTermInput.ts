import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFK_CourseOnTermInput } from "../inputs/TaskCreateWithoutFK_CourseOnTermInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  create!: TaskCreateWithoutFK_CourseOnTermInput;
}
