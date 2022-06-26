import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowType } from "../../enums/FlowType";

@TypeGraphQL.InputType("EnumFlowTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumFlowTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => FlowType, {
    nullable: true
  })
  set?: "LECTURE" | "ASSIGNMENT" | "NOTE" | "EXAM" | undefined;
}
