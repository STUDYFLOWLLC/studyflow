import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTaskTypeNullableFilter } from "../inputs/NestedEnumTaskTypeNullableFilter";
import { NestedEnumTaskTypeNullableWithAggregatesFilter } from "../inputs/NestedEnumTaskTypeNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { TaskType } from "../../enums/TaskType";

@TypeGraphQL.InputType("EnumTaskTypeNullableWithAggregatesFilter", {
  isAbstract: true
})
export class EnumTaskTypeNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTaskTypeNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTaskTypeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTaskTypeNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumTaskTypeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTaskTypeNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumTaskTypeNullableFilter | undefined;
}
