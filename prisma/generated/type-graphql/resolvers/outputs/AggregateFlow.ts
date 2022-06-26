import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowAvgAggregate } from "../outputs/FlowAvgAggregate";
import { FlowCountAggregate } from "../outputs/FlowCountAggregate";
import { FlowMaxAggregate } from "../outputs/FlowMaxAggregate";
import { FlowMinAggregate } from "../outputs/FlowMinAggregate";
import { FlowSumAggregate } from "../outputs/FlowSumAggregate";

@TypeGraphQL.ObjectType("AggregateFlow", {
  isAbstract: true
})
export class AggregateFlow {
  @TypeGraphQL.Field(_type => FlowCountAggregate, {
    nullable: true
  })
  _count!: FlowCountAggregate | null;

  @TypeGraphQL.Field(_type => FlowAvgAggregate, {
    nullable: true
  })
  _avg!: FlowAvgAggregate | null;

  @TypeGraphQL.Field(_type => FlowSumAggregate, {
    nullable: true
  })
  _sum!: FlowSumAggregate | null;

  @TypeGraphQL.Field(_type => FlowMinAggregate, {
    nullable: true
  })
  _min!: FlowMinAggregate | null;

  @TypeGraphQL.Field(_type => FlowMaxAggregate, {
    nullable: true
  })
  _max!: FlowMaxAggregate | null;
}
