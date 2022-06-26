import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutFK_CourseOnTermInput } from "../inputs/TaskUpdateWithoutFK_CourseOnTermInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutFK_CourseOnTermInput;
}
