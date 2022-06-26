import * as TypeGraphQL from "type-graphql";

export enum FlashCardScalarFieldEnum {
  FlashCardID = "FlashCardID",
  CreatedTime = "CreatedTime",
  FK_FlashCardStackID = "FK_FlashCardStackID",
  Position = "Position",
  Front = "Front",
  Back = "Back"
}
TypeGraphQL.registerEnumType(FlashCardScalarFieldEnum, {
  name: "FlashCardScalarFieldEnum",
  description: undefined,
});
