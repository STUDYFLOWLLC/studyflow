import * as TypeGraphQL from "type-graphql";

export enum StudyGroupScalarFieldEnum {
  StudyGroupID = "StudyGroupID",
  Name = "Name",
  FK_UserID = "FK_UserID"
}
TypeGraphQL.registerEnumType(StudyGroupScalarFieldEnum, {
  name: "StudyGroupScalarFieldEnum",
  description: undefined,
});
