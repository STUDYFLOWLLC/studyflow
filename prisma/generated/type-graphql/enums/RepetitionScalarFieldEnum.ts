import * as TypeGraphQL from "type-graphql";

export enum RepetitionScalarFieldEnum {
  RepetitionID = "RepetitionID",
  CreatedTime = "CreatedTime",
  FK_FlowID = "FK_FlowID",
  FK_FlashcardStackID = "FK_FlashcardStackID"
}
TypeGraphQL.registerEnumType(RepetitionScalarFieldEnum, {
  name: "RepetitionScalarFieldEnum",
  description: undefined,
});
