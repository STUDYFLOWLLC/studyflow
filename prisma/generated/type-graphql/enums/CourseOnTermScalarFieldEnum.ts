import * as TypeGraphQL from "type-graphql";

export enum CourseOnTermScalarFieldEnum {
  CourseOnTermID = "CourseOnTermID",
  CreatedTime = "CreatedTime",
  FK_CourseID = "FK_CourseID",
  FK_TermID = "FK_TermID"
}
TypeGraphQL.registerEnumType(CourseOnTermScalarFieldEnum, {
  name: "CourseOnTermScalarFieldEnum",
  description: undefined,
});
