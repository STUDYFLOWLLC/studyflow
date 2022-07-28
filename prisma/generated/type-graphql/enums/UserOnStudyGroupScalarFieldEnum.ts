import * as TypeGraphQL from "type-graphql";

export enum UserOnStudyGroupScalarFieldEnum {
  UserOnStudyGroupID = "UserOnStudyGroupID",
  SendDate = "SendDate",
  AcceptDate = "AcceptDate",
  RemoveDate = "RemoveDate",
  FK_UserID = "FK_UserID",
  FK_StudyGroupID = "FK_StudyGroupID"
}
TypeGraphQL.registerEnumType(UserOnStudyGroupScalarFieldEnum, {
  name: "UserOnStudyGroupScalarFieldEnum",
  description: undefined,
});
