import * as TypeGraphQL from "type-graphql";

export enum AutomationLogScalarFieldEnum {
  AutomationLogID = "AutomationLogID",
  Time = "Time",
  Success = "Success",
  Message = "Message",
  FK_CourseOnTermAutomationID = "FK_CourseOnTermAutomationID"
}
TypeGraphQL.registerEnumType(AutomationLogScalarFieldEnum, {
  name: "AutomationLogScalarFieldEnum",
  description: undefined,
});
