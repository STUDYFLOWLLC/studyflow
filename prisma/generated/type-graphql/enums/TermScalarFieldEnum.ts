import * as TypeGraphQL from "type-graphql";

export enum TermScalarFieldEnum {
  TermID = "TermID",
  CreatedTime = "CreatedTime",
  TermType = "TermType",
  TermName = "TermName",
  TermStartDate = "TermStartDate",
  TermEndDate = "TermEndDate",
  FK_UserID = "FK_UserID",
  FK_SchoolID = "FK_SchoolID"
}
TypeGraphQL.registerEnumType(TermScalarFieldEnum, {
  name: "TermScalarFieldEnum",
  description: undefined,
});
