import * as TypeGraphQL from "type-graphql";

export enum CourseScalarFieldEnum {
  CourseID = "CourseID",
  CreatedTime = "CreatedTime",
  FK_SchoolID = "FK_SchoolID",
  IsOfficial = "IsOfficial",
  Code = "Code",
  Title = "Title",
  Term = "Term"
}
TypeGraphQL.registerEnumType(CourseScalarFieldEnum, {
  name: "CourseScalarFieldEnum",
  description: undefined,
});
