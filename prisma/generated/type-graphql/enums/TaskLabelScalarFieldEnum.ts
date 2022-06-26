import * as TypeGraphQL from "type-graphql";

export enum TaskLabelScalarFieldEnum {
  TaskLabelID = "TaskLabelID",
  CreatedTime = "CreatedTime",
  Label = "Label",
  FK_TaskID = "FK_TaskID"
}
TypeGraphQL.registerEnumType(TaskLabelScalarFieldEnum, {
  name: "TaskLabelScalarFieldEnum",
  description: undefined,
});
