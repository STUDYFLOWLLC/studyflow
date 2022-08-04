import * as TypeGraphQL from "type-graphql";

export enum FlashcardReviewScalarFieldEnum {
  FlashcardReviewID = "FlashcardReviewID",
  CreatedTime = "CreatedTime",
  Status = "Status",
  FK_FlashcardID = "FK_FlashcardID",
  FK_FlashcardStackReviewID = "FK_FlashcardStackReviewID"
}
TypeGraphQL.registerEnumType(FlashcardReviewScalarFieldEnum, {
  name: "FlashcardReviewScalarFieldEnum",
  description: undefined,
});
