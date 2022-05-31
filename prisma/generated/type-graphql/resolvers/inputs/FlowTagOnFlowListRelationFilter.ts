import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowWhereInput } from "../inputs/FlowTagOnFlowWhereInput";

@TypeGraphQL.InputType("FlowTagOnFlowListRelationFilter", {
  isAbstract: true
})
export class FlowTagOnFlowListRelationFilter {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereInput, {
    nullable: true
  })
  every?: FlowTagOnFlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereInput, {
    nullable: true
  })
  some?: FlowTagOnFlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereInput, {
    nullable: true
  })
  none?: FlowTagOnFlowWhereInput | undefined;
}
