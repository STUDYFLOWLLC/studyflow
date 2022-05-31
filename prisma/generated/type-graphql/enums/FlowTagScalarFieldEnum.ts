import * as TypeGraphQL from "type-graphql";

export enum FlowTagScalarFieldEnum {
  FlowTagID = "FlowTagID",
  CreatedTime = "CreatedTime",
  FK_UserID = "FK_UserID",
  Public = "Public",
  Name = "Name"
}
TypeGraphQL.registerEnumType(FlowTagScalarFieldEnum, {
  name: "FlowTagScalarFieldEnum",
  description: undefined,
});
