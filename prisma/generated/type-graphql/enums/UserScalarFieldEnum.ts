import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  UserID = "UserID",
  SetupComplete = "SetupComplete",
  SupabaseID = "SupabaseID",
  Username = "Username",
  ProfilePictureLink = "ProfilePictureLink",
  DefaultVisibility = "DefaultVisibility"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
