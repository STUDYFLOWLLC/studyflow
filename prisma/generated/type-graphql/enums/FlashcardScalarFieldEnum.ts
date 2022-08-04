import * as TypeGraphQL from "type-graphql";

export enum FlashcardScalarFieldEnum {
  FlashcardID = "FlashcardID",
  CreatedTime = "CreatedTime",
  DeletedTime = "DeletedTime",
  FK_FlashcardStackID = "FK_FlashcardStackID",
  Position = "Position",
  Front = "Front",
  FrontImageUrl = "FrontImageUrl",
  Back = "Back",
  BackImageUrl = "BackImageUrl"
}
TypeGraphQL.registerEnumType(FlashcardScalarFieldEnum, {
  name: "FlashcardScalarFieldEnum",
  description: undefined,
});
