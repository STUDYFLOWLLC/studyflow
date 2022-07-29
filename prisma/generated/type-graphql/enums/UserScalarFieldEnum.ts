import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  UserID = "UserID",
  CreatedTime = "CreatedTime",
  SetupStep = "SetupStep",
  SupabaseID = "SupabaseID",
  DefaultVisibility = "DefaultVisibility",
  Email = "Email",
  Name = "Name",
  Username = "Username",
  ProfilePictureLink = "ProfilePictureLink",
  FK_SchoolID = "FK_SchoolID"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
