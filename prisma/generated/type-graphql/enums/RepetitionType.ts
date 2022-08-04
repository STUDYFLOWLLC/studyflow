import * as TypeGraphQL from "type-graphql";

export enum RepetitionType {
  FOURTEN = "FOURTEN",
  FOURTHIRTY = "FOURTHIRTY",
  SIXTHIRTY = "SIXTHIRTY"
}
TypeGraphQL.registerEnumType(RepetitionType, {
  name: "RepetitionType",
  description: undefined,
});
