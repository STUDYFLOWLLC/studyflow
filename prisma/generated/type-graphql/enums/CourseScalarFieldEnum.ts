import * as TypeGraphQL from "type-graphql";

export enum CourseScalarFieldEnum {
  CourseID = "CourseID",
  CreatedTime = "CreatedTime",
  IsOfficial = "IsOfficial",
  Term = "Term",
  Code = "Code",
  Title = "Title",
  FK_SchoolID = "FK_SchoolID",
  FK_ProfessorID = "FK_ProfessorID"
}
TypeGraphQL.registerEnumType(CourseScalarFieldEnum, {
  name: "CourseScalarFieldEnum",
  description: undefined,
});
