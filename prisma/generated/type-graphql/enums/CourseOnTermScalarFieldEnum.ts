import * as TypeGraphQL from "type-graphql";

export enum CourseOnTermScalarFieldEnum {
  CourseOnTermID = "CourseOnTermID",
  CreatedTime = "CreatedTime",
  Index = "Index",
  Color = "Color",
  Nickname = "Nickname",
  IsNew = "IsNew",
  FK_CourseID = "FK_CourseID",
  FK_TermID = "FK_TermID"
}
TypeGraphQL.registerEnumType(CourseOnTermScalarFieldEnum, {
  name: "CourseOnTermScalarFieldEnum",
  description: undefined,
});
