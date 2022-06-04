import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  UserID = "UserID",
  CreatedTime = "CreatedTime",
  SetupComplete = "SetupComplete",
  SupabaseID = "SupabaseID",
  Email = "Email",
  Name = "Name",
  Username = "Username",
  ProfilePictureLink = "ProfilePictureLink",
  DefaultVisibility = "DefaultVisibility",
  FK_SchoolID = "FK_SchoolID"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
