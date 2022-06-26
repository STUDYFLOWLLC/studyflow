import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetupStep } from "../../enums/SetupStep";

@TypeGraphQL.InputType("NestedEnumSetupStepFilter", {
  isAbstract: true
})
export class NestedEnumSetupStepFilter {
  @TypeGraphQL.Field(_type => SetupStep, {
    nullable: true
  })
  equals?: "PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE" | undefined;

  @TypeGraphQL.Field(_type => [SetupStep], {
    nullable: true
  })
  in?: Array<"PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE"> | undefined;

  @TypeGraphQL.Field(_type => [SetupStep], {
    nullable: true
  })
  notIn?: Array<"PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSetupStepFilter, {
    nullable: true
  })
  not?: NestedEnumSetupStepFilter | undefined;
}
