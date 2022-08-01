import * as TypeGraphQL from "type-graphql";

export enum FlashcardScalarFieldEnum {
  FlashcardID = "FlashcardID",
  CreatedTime = "CreatedTime",
  DeletedTime = "DeletedTime",
  FK_FlashcardStackID = "FK_FlashcardStackID",
  Position = "Position",
  Front = "Front",
  Back = "Back"
}
TypeGraphQL.registerEnumType(FlashcardScalarFieldEnum, {
  name: "FlashcardScalarFieldEnum",
  description: undefined,
});
