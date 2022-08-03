import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateNestedOneWithoutFK_TasksInput } from "../inputs/FlowCreateNestedOneWithoutFK_TasksInput";
import { RepetitionCreateNestedOneWithoutFK_TasksInput } from "../inputs/RepetitionCreateNestedOneWithoutFK_TasksInput";
import { TaskLabelCreateNestedManyWithoutFK_TaskInput } from "../inputs/TaskLabelCreateNestedManyWithoutFK_TaskInput";
import { UserCreateNestedOneWithoutFK_TaskInput } from "../inputs/UserCreateNestedOneWithoutFK_TaskInput";
import { TaskType } from "../../enums/TaskType";

@TypeGraphQL.InputType("TaskCreateWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TaskCreateWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TaskID?: string | undefined;

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

  @TypeGraphQL.Field(_type => TaskType, {
    nullable: true
  })
  Type?: "WORK_ON" | "DUE" | "REVIEW" | undefined;

  @TypeGraphQL.Field(_type => TaskLabelCreateNestedManyWithoutFK_TaskInput, {
    nullable: true
  })
  FK_TaskLabel?: TaskLabelCreateNestedManyWithoutFK_TaskInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_TaskInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_TaskInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_TasksInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateNestedOneWithoutFK_TasksInput, {
    nullable: true
  })
  FK_Repetition?: RepetitionCreateNestedOneWithoutFK_TasksInput | undefined;
}
