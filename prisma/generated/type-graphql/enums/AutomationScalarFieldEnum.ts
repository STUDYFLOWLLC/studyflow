import * as TypeGraphQL from "type-graphql";

export enum AutomationScalarFieldEnum {
  AutomationID = "AutomationID",
  RefreshToken = "RefreshToken",
  FK_UserID = "FK_UserID"
}
TypeGraphQL.registerEnumType(AutomationScalarFieldEnum, {
  name: "AutomationScalarFieldEnum",
  description: undefined,
});
