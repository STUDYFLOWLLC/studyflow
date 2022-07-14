import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewAvgAggregate } from "../outputs/FlowViewAvgAggregate";
import { FlowViewCountAggregate } from "../outputs/FlowViewCountAggregate";
import { FlowViewMaxAggregate } from "../outputs/FlowViewMaxAggregate";
import { FlowViewMinAggregate } from "../outputs/FlowViewMinAggregate";
import { FlowViewSumAggregate } from "../outputs/FlowViewSumAggregate";

@TypeGraphQL.ObjectType("AggregateFlowView", {
  isAbstract: true
})
export class AggregateFlowView {
  @TypeGraphQL.Field(_type => FlowViewCountAggregate, {
    nullable: true
  })
  _count!: FlowViewCountAggregate | null;

  @TypeGraphQL.Field(_type => FlowViewAvgAggregate, {
    nullable: true
  })
  _avg!: FlowViewAvgAggregate | null;

  @TypeGraphQL.Field(_type => FlowViewSumAggregate, {
    nullable: true
  })
  _sum!: FlowViewSumAggregate | null;

  @TypeGraphQL.Field(_type => FlowViewMinAggregate, {
    nullable: true
  })
  _min!: FlowViewMinAggregate | null;

  @TypeGraphQL.Field(_type => FlowViewMaxAggregate, {
    nullable: true
  })
  _max!: FlowViewMaxAggregate | null;
}
