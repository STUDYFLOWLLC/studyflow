import * as TypeGraphQL from "type-graphql";

export enum FlowType {
  LECTURE = "LECTURE",
  ASSIGNMENT = "ASSIGNMENT",
  NOTE = "NOTE",
  EXAM = "EXAM"
}
TypeGraphQL.registerEnumType(FlowType, {
  name: "FlowType",
  description: undefined,
});
