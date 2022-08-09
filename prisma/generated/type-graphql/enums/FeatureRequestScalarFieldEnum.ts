import * as TypeGraphQL from "type-graphql";

export enum FeatureRequestScalarFieldEnum {
  FeatureRequestID = "FeatureRequestID",
  CreatedTime = "CreatedTime",
  DeletedTime = "DeletedTime",
  ImplementedTime = "ImplementedTime",
  FK_UserID = "FK_UserID",
  Title = "Title",
  Body = "Body"
}
TypeGraphQL.registerEnumType(FeatureRequestScalarFieldEnum, {
  name: "FeatureRequestScalarFieldEnum",
  description: undefined,
});
