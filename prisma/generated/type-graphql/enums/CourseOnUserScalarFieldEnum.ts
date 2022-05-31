import * as TypeGraphQL from "type-graphql";

export enum CourseOnUserScalarFieldEnum {
  CourseOnUserID = "CourseOnUserID",
  HOLDER = "HOLDER",
  FK_UserID = "FK_UserID",
  FK_CourseID = "FK_CourseID"
}
TypeGraphQL.registerEnumType(CourseOnUserScalarFieldEnum, {
  name: "CourseOnUserScalarFieldEnum",
  description: undefined,
});
