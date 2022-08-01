import * as TypeGraphQL from "type-graphql";

export enum FlashcardReviewScalarFieldEnum {
  FlashcardReviewID = "FlashcardReviewID",
  CreatedTime = "CreatedTime",
  FK_FlashcardID = "FK_FlashcardID",
  Status = "Status"
}
TypeGraphQL.registerEnumType(FlashcardReviewScalarFieldEnum, {
  name: "FlashcardReviewScalarFieldEnum",
  description: undefined,
});
