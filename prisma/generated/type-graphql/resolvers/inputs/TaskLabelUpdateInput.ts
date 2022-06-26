import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutFK_TaskLabelInput } from "../inputs/TaskUpdateOneWithoutFK_TaskLabelInput";

@TypeGraphQL.InputType("TaskLabelUpdateInput", {
  isAbstract: true
})
export class TaskLabelUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Label?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneWithoutFK_TaskLabelInput, {
    nullable: true
  })
  FK_Task?: TaskUpdateOneWithoutFK_TaskLabelInput | undefined;
}
