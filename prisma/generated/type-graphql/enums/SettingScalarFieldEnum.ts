import * as TypeGraphQL from "type-graphql";

export enum SettingScalarFieldEnum {
  SettingID = "SettingID",
  HasSeenWelcomeMessage = "HasSeenWelcomeMessage",
  LastSeenWelcomeMessageAt = "LastSeenWelcomeMessageAt",
  FK_UserID = "FK_UserID"
}
TypeGraphQL.registerEnumType(SettingScalarFieldEnum, {
  name: "SettingScalarFieldEnum",
  description: undefined,
});
