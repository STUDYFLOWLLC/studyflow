import * as TypeGraphQL from "type-graphql";

export enum SetupStep {
  PROFILE = "PROFILE",
  EDUCATION = "EDUCATION",
  COMMUNITY = "COMMUNITY",
  COMPLETE = "COMPLETE"
}
TypeGraphQL.registerEnumType(SetupStep, {
  name: "SetupStep",
  description: undefined,
});
