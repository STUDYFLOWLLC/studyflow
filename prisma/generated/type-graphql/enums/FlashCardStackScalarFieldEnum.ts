import * as TypeGraphQL from "type-graphql";

export enum FlashCardStackScalarFieldEnum {
  FlashCardStackID = "FlashCardStackID",
  CreatedTime = "CreatedTime",
  FK_FlowID = "FK_FlowID",
  Title = "Title"
}
TypeGraphQL.registerEnumType(FlashCardStackScalarFieldEnum, {
  name: "FlashCardStackScalarFieldEnum",
  description: undefined,
});
