import * as TypeGraphQL from "type-graphql";

export enum ProfessorsOnCoursesScalarFieldEnum {
  ProfessorsOnCoursesID = "ProfessorsOnCoursesID",
  CreatedTime = "CreatedTime",
  FK_CourseID = "FK_CourseID",
  FK_ProfessorID = "FK_ProfessorID"
}
TypeGraphQL.registerEnumType(ProfessorsOnCoursesScalarFieldEnum, {
  name: "ProfessorsOnCoursesScalarFieldEnum",
  description: undefined,
});
