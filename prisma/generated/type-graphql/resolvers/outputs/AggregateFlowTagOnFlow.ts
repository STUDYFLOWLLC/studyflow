import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowAvgAggregate } from "../outputs/FlowTagOnFlowAvgAggregate";
import { FlowTagOnFlowCountAggregate } from "../outputs/FlowTagOnFlowCountAggregate";
import { FlowTagOnFlowMaxAggregate } from "../outputs/FlowTagOnFlowMaxAggregate";
import { FlowTagOnFlowMinAggregate } from "../outputs/FlowTagOnFlowMinAggregate";
import { FlowTagOnFlowSumAggregate } from "../outputs/FlowTagOnFlowSumAggregate";

@TypeGraphQL.ObjectType("AggregateFlowTagOnFlow", {
  isAbstract: true
})
export class AggregateFlowTagOnFlow {
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
