import * as TypeGraphQL from "type-graphql";

export enum FlashcardStackScalarFieldEnum {
  FlashcardStackID = "FlashcardStackID",
  CreatedTime = "CreatedTime",
  DeletedTime = "DeletedTime",
  FK_FlowID = "FK_FlowID",
  Title = "Title",
  Description = "Description"
}
TypeGraphQL.registerEnumType(FlashcardStackScalarFieldEnum, {
  name: "FlashcardStackScalarFieldEnum",
  description: undefined,
});
