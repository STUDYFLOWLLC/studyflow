import * as TypeGraphQL from "type-graphql";

export enum TermType {
  QUARTER = "QUARTER",
  TRIMESTER = "TRIMESTER",
  SEMESTER = "SEMESTER",
  SUMMER = "SUMMER"
}
TypeGraphQL.registerEnumType(TermType, {
  name: "TermType",
  description: undefined,
});
