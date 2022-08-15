import * as TypeGraphQL from "type-graphql";

export enum CourseOnTermAutomationScalarFieldEnum {
  CourseOnTermAutomationID = "CourseOnTermAutomationID",
  FolderID = "FolderID",
  DefaultType = "DefaultType",
  DefaultVisibility = "DefaultVisibility",
  DefaultRepetitionType = "DefaultRepetitionType",
  FK_AutomationID = "FK_AutomationID",
  FK_CourseOnTermID = "FK_CourseOnTermID"
}
TypeGraphQL.registerEnumType(CourseOnTermAutomationScalarFieldEnum, {
  name: "CourseOnTermAutomationScalarFieldEnum",
  description: undefined,
});
