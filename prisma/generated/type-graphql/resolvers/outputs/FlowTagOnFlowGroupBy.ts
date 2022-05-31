import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowAvgAggregate } from "../outputs/FlowTagOnFlowAvgAggregate";
import { FlowTagOnFlowCountAggregate } from "../outputs/FlowTagOnFlowCountAggregate";
import { FlowTagOnFlowMaxAggregate } from "../outputs/FlowTagOnFlowMaxAggregate";
import { FlowTagOnFlowMinAggregate } from "../outputs/FlowTagOnFlowMinAggregate";
import { FlowTagOnFlowSumAggregate } from "../outputs/FlowTagOnFlowSumAggregate";

@TypeGraphQL.ObjectType("FlowTagOnFlowGroupBy", {
  isAbstract: true
})
export class FlowTagOnFlowGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlowTagOnFlowID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_FlowID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_FlowTagID!: number | null;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCountAggregate, {
    nullable: true
  })
  _count!: FlowTagOnFlowCountAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagOnFlowAvgAggregate, {
    nullable: true
  })
  _avg!: FlowTagOnFlowAvgAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagOnFlowSumAggregate, {
    nullable: true
  })
  _sum!: FlowTagOnFlowSumAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagOnFlowMinAggregate, {
    nullable: true
  })
  _min!: FlowTagOnFlowMinAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagOnFlowMaxAggregate, {
    nullable: true
  })
  _max!: FlowTagOnFlowMaxAggregate | null;
}
