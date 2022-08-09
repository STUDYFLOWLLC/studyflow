import * as TypeGraphQL from "type-graphql";

export enum BugReportScalarFieldEnum {
  BugReportID = "BugReportID",
  CreatedTime = "CreatedTime",
  DeletedTime = "DeletedTime",
  FK_UserID = "FK_UserID",
  Title = "Title",
  Body = "Body"
}
TypeGraphQL.registerEnumType(BugReportScalarFieldEnum, {
  name: "BugReportScalarFieldEnum",
  description: undefined,
});
