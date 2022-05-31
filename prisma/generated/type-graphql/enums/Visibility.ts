import * as TypeGraphQL from "type-graphql";

export enum Visibility {
  HIDDEN = "HIDDEN",
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC"
}
TypeGraphQL.registerEnumType(Visibility, {
  name: "Visibility",
  description: undefined,
});
