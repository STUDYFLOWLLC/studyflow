import * as TypeGraphQL from "type-graphql";

export enum FriendshipScalarFieldEnum {
  FriendshipID = "FriendshipID",
  SentTime = "SentTime",
  AcceptedTime = "AcceptedTime",
  RejectedTime = "RejectedTime",
  RemovedTime = "RemovedTime",
  CanceledTime = "CanceledTime",
  FK_UserFromID = "FK_UserFromID",
  FK_UserToID = "FK_UserToID"
}
TypeGraphQL.registerEnumType(FriendshipScalarFieldEnum, {
  name: "FriendshipScalarFieldEnum",
  description: undefined,
});
