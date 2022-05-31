import * as TypeGraphQL from "type-graphql";

export enum SchoolScalarFieldEnum {
  SchoolID = "SchoolID",
  Name = "Name",
  HasClassSupport = "HasClassSupport"
}
TypeGraphQL.registerEnumType(SchoolScalarFieldEnum, {
  name: "SchoolScalarFieldEnum",
  description: undefined,
});
