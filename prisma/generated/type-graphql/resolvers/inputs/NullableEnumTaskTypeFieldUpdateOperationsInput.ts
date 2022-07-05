import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskType } from "../../enums/TaskType";

@TypeGraphQL.InputType("NullableEnumTaskTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumTaskTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TaskType, {
    nullable: true
  })
  set?: "WORK_ON" | "DUE" | "REVIEW" | undefined;
}
