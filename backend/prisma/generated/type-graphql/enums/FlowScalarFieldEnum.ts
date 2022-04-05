import * as TypeGraphQL from "type-graphql";

export enum FlowScalarFieldEnum {
  FlowID = "FlowID",
  CreatedTime = "CreatedTime",
  CreatedById = "CreatedById",
  Title = "Title",
  Body = "Body",
  Visibility = "Visibility"
}
TypeGraphQL.registerEnumType(FlowScalarFieldEnum, {
  name: "FlowScalarFieldEnum",
  description: undefined,
});
