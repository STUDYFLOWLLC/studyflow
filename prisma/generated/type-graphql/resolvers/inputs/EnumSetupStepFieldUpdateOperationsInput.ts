import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetupStep } from "../../enums/SetupStep";

@TypeGraphQL.InputType("EnumSetupStepFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumSetupStepFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => SetupStep, {
    nullable: true
  })
  set?: "PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE" | undefined;
}
