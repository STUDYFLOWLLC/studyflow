import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagAvgAggregate } from "../outputs/FlowTagAvgAggregate";
import { FlowTagCountAggregate } from "../outputs/FlowTagCountAggregate";
import { FlowTagMaxAggregate } from "../outputs/FlowTagMaxAggregate";
import { FlowTagMinAggregate } from "../outputs/FlowTagMinAggregate";
import { FlowTagSumAggregate } from "../outputs/FlowTagSumAggregate";

@TypeGraphQL.ObjectType("AggregateFlowTag", {
  isAbstract: true
})
export class AggregateFlowTag {
  @TypeGraphQL.Field(_type => FlowTagCountAggregate, {
    nullable: true
  })
  _count!: FlowTagCountAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagAvgAggregate, {
    nullable: true
  })
  _avg!: FlowTagAvgAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagSumAggregate, {
    nullable: true
  })
  _sum!: FlowTagSumAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagMinAggregate, {
    nullable: true
  })
  _min!: FlowTagMinAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagMaxAggregate, {
    nullable: true
  })
  _max!: FlowTagMaxAggregate | null;
}
