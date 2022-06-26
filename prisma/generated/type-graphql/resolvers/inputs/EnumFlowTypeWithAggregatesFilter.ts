import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumFlowTypeFilter } from "../inputs/NestedEnumFlowTypeFilter";
import { NestedEnumFlowTypeWithAggregatesFilter } from "../inputs/NestedEnumFlowTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { FlowType } from "../../enums/FlowType";

@TypeGraphQL.InputType("EnumFlowTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumFlowTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => FlowType, {
    nullable: true
  })
  equals?: "LECTURE" | "ASSIGNMENT" | "NOTE" | "EXAM" | undefined;

  @TypeGraphQL.Field(_type => [FlowType], {
    nullable: true
  })
  in?: Array<"LECTURE" | "ASSIGNMENT" | "NOTE" | "EXAM"> | undefined;

  @TypeGraphQL.Field(_type => [FlowType], {
    nullable: true
  })
  notIn?: Array<"LECTURE" | "ASSIGNMENT" | "NOTE" | "EXAM"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFlowTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumFlowTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFlowTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumFlowTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFlowTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumFlowTypeFilter | undefined;
}
