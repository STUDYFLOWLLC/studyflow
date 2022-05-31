import * as TypeGraphQL from "type-graphql";

export enum FlowTagOnFlowScalarFieldEnum {
  FlowTagOnFlowID = "FlowTagOnFlowID",
  HOLDER = "HOLDER",
  FK_FlowID = "FK_FlowID",
  FK_FlowTagID = "FK_FlowTagID"
}
TypeGraphQL.registerEnumType(FlowTagOnFlowScalarFieldEnum, {
  name: "FlowTagOnFlowScalarFieldEnum",
  description: undefined,
});
