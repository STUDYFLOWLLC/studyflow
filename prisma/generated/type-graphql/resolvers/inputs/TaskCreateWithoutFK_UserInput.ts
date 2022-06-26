import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateNestedOneWithoutFK_TasksInput } from "../inputs/CourseOnTermCreateNestedOneWithoutFK_TasksInput";
import { FlowCreateNestedOneWithoutFK_TasksInput } from "../inputs/FlowCreateNestedOneWithoutFK_TasksInput";
import { TaskLabelCreateNestedManyWithoutFK_TaskInput } from "../inputs/TaskLabelCreateNestedManyWithoutFK_TaskInput";

@TypeGraphQL.InputType("TaskCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class TaskCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Completed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DueDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TaskLabelCreateNestedManyWithoutFK_TaskInput, {
    nullable: true
  })
  FK_TaskLabel?: TaskLabelCreateNestedManyWithoutFK_TaskInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_TasksInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedOneWithoutFK_TasksInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermCreateNestedOneWithoutFK_TasksInput | undefined;
}
