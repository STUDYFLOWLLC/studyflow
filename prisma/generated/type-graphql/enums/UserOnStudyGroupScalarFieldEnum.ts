import * as TypeGraphQL from "type-graphql";

export enum UserOnStudyGroupScalarFieldEnum {
  UserOnStudyGroupID = "UserOnStudyGroupID",
  SendTime = "SendTime",
  AcceptedTime = "AcceptedTime",
  RejectedTime = "RejectedTime",
  RemovedTime = "RemovedTime",
  CanceledTime = "CanceledTime",
  FK_UserID = "FK_UserID",
  FK_StudyGroupID = "FK_StudyGroupID"
}
TypeGraphQL.registerEnumType(UserOnStudyGroupScalarFieldEnum, {
  name: "UserOnStudyGroupScalarFieldEnum",
  description: undefined,
});
