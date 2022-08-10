import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CourseOnTermUpdateOneWithoutFK_TasksInput } from "../inputs/CourseOnTermUpdateOneWithoutFK_TasksInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowUpdateOneWithoutFK_TasksInput } from "../inputs/FlowUpdateOneWithoutFK_TasksInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumTaskTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumTaskTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskLabelUpdateManyWithoutFK_TaskInput } from "../inputs/TaskLabelUpdateManyWithoutFK_TaskInput";
import { UserUpdateOneWithoutFK_TaskInput } from "../inputs/UserUpdateOneWithoutFK_TaskInput";

@TypeGraphQL.InputType("TaskUpdateWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class TaskUpdateWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  TaskID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  DeletedTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  Completed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  DueDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumTaskTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  Type?: NullableEnumTaskTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskLabelUpdateManyWithoutFK_TaskInput, {
    nullable: true
  })
  FK_TaskLabel?: TaskLabelUpdateManyWithoutFK_TaskInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_TaskInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_TaskInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutFK_TasksInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateOneWithoutFK_TasksInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermUpdateOneWithoutFK_TasksInput | undefined;
}
