import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTaskTypeNullableFilter } from "../inputs/NestedEnumTaskTypeNullableFilter";
import { TaskType } from "../../enums/TaskType";

@TypeGraphQL.InputType("EnumTaskTypeNullableFilter", {
  isAbstract: true
})
export class EnumTaskTypeNullableFilter {
  @TypeGraphQL.Field(_type => TaskType, {
    nullable: true
  })
  equals?: "WORK_ON" | "DUE" | "REVIEW" | undefined;

  @TypeGraphQL.Field(_type => [TaskType], {
    nullable: true
  })
  in?: Array<"WORK_ON" | "DUE" | "REVIEW"> | undefined;

  @TypeGraphQL.Field(_type => [TaskType], {
    nullable: true
  })
  notIn?: Array<"WORK_ON" | "DUE" | "REVIEW"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTaskTypeNullableFilter, {
    nullable: true
  })
  not?: NestedEnumTaskTypeNullableFilter | undefined;
}
