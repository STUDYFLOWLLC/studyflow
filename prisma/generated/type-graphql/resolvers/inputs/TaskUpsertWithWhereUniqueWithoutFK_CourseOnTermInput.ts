import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFK_CourseOnTermInput } from "../inputs/TaskCreateWithoutFK_CourseOnTermInput";
import { TaskUpdateWithoutFK_CourseOnTermInput } from "../inputs/TaskUpdateWithoutFK_CourseOnTermInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutFK_CourseOnTermInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  create!: TaskCreateWithoutFK_CourseOnTermInput;
}
