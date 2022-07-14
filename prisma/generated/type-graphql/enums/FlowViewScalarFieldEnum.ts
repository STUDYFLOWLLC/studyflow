import * as TypeGraphQL from "type-graphql";

export enum FlowViewScalarFieldEnum {
  FlowViewID = "FlowViewID",
  CreatedTime = "CreatedTime",
  FK_FlowID = "FK_FlowID",
  FK_UserID = "FK_UserID"
}
TypeGraphQL.registerEnumType(FlowViewScalarFieldEnum, {
  name: "FlowViewScalarFieldEnum",
  description: undefined,
});
