import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestAvgAggregate } from "../outputs/FeatureRequestAvgAggregate";
import { FeatureRequestCountAggregate } from "../outputs/FeatureRequestCountAggregate";
import { FeatureRequestMaxAggregate } from "../outputs/FeatureRequestMaxAggregate";
import { FeatureRequestMinAggregate } from "../outputs/FeatureRequestMinAggregate";
import { FeatureRequestSumAggregate } from "../outputs/FeatureRequestSumAggregate";

@TypeGraphQL.ObjectType("AggregateFeatureRequest", {
  isAbstract: true
})
export class AggregateFeatureRequest {
  @TypeGraphQL.Field(_type => FeatureRequestCountAggregate, {
    nullable: true
  })
  _count!: FeatureRequestCountAggregate | null;

  @TypeGraphQL.Field(_type => FeatureRequestAvgAggregate, {
    nullable: true
  })
  _avg!: FeatureRequestAvgAggregate | null;

  @TypeGraphQL.Field(_type => FeatureRequestSumAggregate, {
    nullable: true
  })
  _sum!: FeatureRequestSumAggregate | null;

  @TypeGraphQL.Field(_type => FeatureRequestMinAggregate, {
    nullable: true
  })
  _min!: FeatureRequestMinAggregate | null;

  @TypeGraphQL.Field(_type => FeatureRequestMaxAggregate, {
    nullable: true
  })
  _max!: FeatureRequestMaxAggregate | null;
}
