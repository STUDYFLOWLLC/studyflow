import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSetupStepFilter } from "../inputs/NestedEnumSetupStepFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { SetupStep } from "../../enums/SetupStep";

@TypeGraphQL.InputType("NestedEnumSetupStepWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumSetupStepWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumSetupStepWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumSetupStepWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSetupStepFilter, {
    nullable: true
  })
  _min?: NestedEnumSetupStepFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSetupStepFilter, {
    nullable: true
  })
  _max?: NestedEnumSetupStepFilter | undefined;
}
