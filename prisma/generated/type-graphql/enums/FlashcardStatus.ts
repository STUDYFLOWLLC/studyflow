import * as TypeGraphQL from "type-graphql";

export enum FlashcardStatus {
  NEUTRAL = "NEUTRAL",
  CORRECT = "CORRECT",
  INCORRECT = "INCORRECT"
}
TypeGraphQL.registerEnumType(FlashcardStatus, {
  name: "FlashcardStatus",
  description: undefined,
});
