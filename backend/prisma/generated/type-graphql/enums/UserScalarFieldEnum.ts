import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  UserID = "UserID",
  Email = "Email",
  UID = "UID",
  DisplayName = "DisplayName",
  ProfilePictureLink = "ProfilePictureLink",
  DefaultVisibility = "DefaultVisibility"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
