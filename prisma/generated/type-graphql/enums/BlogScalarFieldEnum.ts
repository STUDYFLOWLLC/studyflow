import * as TypeGraphQL from "type-graphql";

export enum BlogScalarFieldEnum {
  BlogID = "BlogID",
  CreatedTime = "CreatedTime",
  DeletedTime = "DeletedTime",
  FK_UserID = "FK_UserID",
  Title = "Title",
  Body = "Body"
}
TypeGraphQL.registerEnumType(BlogScalarFieldEnum, {
  name: "BlogScalarFieldEnum",
  description: undefined,
});
