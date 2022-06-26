import * as TypeGraphQL from "type-graphql";

export enum ProfessorScalarFieldEnum {
  ProfessorID = "ProfessorID",
  FK_SchoolID = "FK_SchoolID",
  Name = "Name",
  Email = "Email"
}
TypeGraphQL.registerEnumType(ProfessorScalarFieldEnum, {
  name: "ProfessorScalarFieldEnum",
  description: undefined,
});
