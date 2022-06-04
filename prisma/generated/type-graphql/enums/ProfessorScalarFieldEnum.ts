import * as TypeGraphQL from "type-graphql";

export enum ProfessorScalarFieldEnum {
  ProfessorID = "ProfessorID",
  Name = "Name",
  Email = "Email"
}
TypeGraphQL.registerEnumType(ProfessorScalarFieldEnum, {
  name: "ProfessorScalarFieldEnum",
  description: undefined,
});
