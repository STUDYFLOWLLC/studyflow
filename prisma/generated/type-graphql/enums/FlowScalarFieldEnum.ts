import * as TypeGraphQL from "type-graphql";

export enum FlowScalarFieldEnum {
  FlowID = "FlowID",
  CreatedTime = "CreatedTime",
  LastOpened = "LastOpened",
  UserEnteredDate = "UserEnteredDate",
  Type = "Type",
  Title = "Title",
  Trashed = "Trashed",
  Visibility = "Visibility",
  WasAutomated = "WasAutomated",
  Body = "Body",
  DeletedTime = "DeletedTime",
  FK_CourseOnTermID = "FK_CourseOnTermID",
  FK_UserID = "FK_UserID"
}
TypeGraphQL.registerEnumType(FlowScalarFieldEnum, {
  name: "FlowScalarFieldEnum",
  description: undefined,
});
