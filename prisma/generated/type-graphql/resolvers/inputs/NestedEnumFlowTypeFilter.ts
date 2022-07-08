import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowType } from "../../enums/FlowType";

@TypeGraphQL.InputType("NestedEnumFlowTypeFilter", {
  isAbstract: true
})
export class NestedEnumFlowTypeFilter {
  @TypeGraphQL.Field(_type => FlowType, {
    nullable: true
  })
  equals?: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS" | undefined;

  @TypeGraphQL.Field(_type => [FlowType], {
    nullable: true
  })
  in?: Array<"LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS"> | undefined;

  @TypeGraphQL.Field(_type => [FlowType], {
    nullable: true
  })
  notIn?: Array<"LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFlowTypeFilter, {
    nullable: true
  })
  not?: NestedEnumFlowTypeFilter | undefined;
}
