import * as TypeGraphQL from "type-graphql";

export enum FlowScalarFieldEnum {
  FlowID = "FlowID",
  CreatedTime = "CreatedTime",
  LastOpened = "LastOpened",
  UserEnteredDate = "UserEnteredDate",
  Type = "Type",
  Title = "Title",
  Body = "Body",
  Visibility = "Visibility",
  FK_CourseOnTermID = "FK_CourseOnTermID"
}
TypeGraphQL.registerEnumType(FlowScalarFieldEnum, {
  name: "FlowScalarFieldEnum",
  description: undefined,
});
