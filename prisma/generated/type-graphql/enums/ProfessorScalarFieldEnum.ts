import * as TypeGraphQL from "type-graphql";

export enum ProfessorScalarFieldEnum {
  ProfessorID = "ProfessorID",
  FK_CourseID = "FK_CourseID",
  Name = "Name"
}
TypeGraphQL.registerEnumType(ProfessorScalarFieldEnum, {
  name: "ProfessorScalarFieldEnum",
  description: undefined,
});
