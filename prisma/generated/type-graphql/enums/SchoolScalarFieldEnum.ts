import * as TypeGraphQL from "type-graphql";

export enum SchoolScalarFieldEnum {
  SchoolID = "SchoolID",
  Name = "Name",
  HasClassSupport = "HasClassSupport",
  TermType = "TermType"
}
TypeGraphQL.registerEnumType(SchoolScalarFieldEnum, {
  name: "SchoolScalarFieldEnum",
  description: undefined,
});
