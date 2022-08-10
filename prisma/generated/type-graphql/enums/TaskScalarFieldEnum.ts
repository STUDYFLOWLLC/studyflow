import * as TypeGraphQL from "type-graphql";

export enum TaskScalarFieldEnum {
  TaskID = "TaskID",
  CreatedTime = "CreatedTime",
  DeletedTime = "DeletedTime",
  Title = "Title",
  Completed = "Completed",
  Description = "Description",
  DueDate = "DueDate",
  Type = "Type",
  FK_UserID = "FK_UserID",
  FK_FlowID = "FK_FlowID",
  FK_CourseOnTermID = "FK_CourseOnTermID",
  FK_RepetitionID = "FK_RepetitionID"
}
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
  name: "TaskScalarFieldEnum",
  description: undefined,
});
