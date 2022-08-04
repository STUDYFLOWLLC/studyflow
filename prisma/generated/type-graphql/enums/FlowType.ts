import * as TypeGraphQL from "type-graphql";

export enum FlowType {
  LECTURE = "LECTURE",
  DISCUSSION = "DISCUSSION",
  NOTE = "NOTE",
  ASSIGNMENT = "ASSIGNMENT",
  ASSESSMENT = "ASSESSMENT",
  SYNTHESIS = "SYNTHESIS"
}
TypeGraphQL.registerEnumType(FlowType, {
  name: "FlowType",
  description: undefined,
});
