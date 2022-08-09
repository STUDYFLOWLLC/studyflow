import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestAvgAggregate } from "../outputs/FeatureRequestAvgAggregate";
import { FeatureRequestCountAggregate } from "../outputs/FeatureRequestCountAggregate";
import { FeatureRequestMaxAggregate } from "../outputs/FeatureRequestMaxAggregate";
import { FeatureRequestMinAggregate } from "../outputs/FeatureRequestMinAggregate";
import { FeatureRequestSumAggregate } from "../outputs/FeatureRequestSumAggregate";

@TypeGraphQL.ObjectType("FeatureRequestGroupBy", {
  isAbstract: true
})
export class FeatureRequestGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FeatureRequestID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ImplementedTime!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Body!: string;

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
