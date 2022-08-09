import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportAvgAggregate } from "../outputs/BugReportAvgAggregate";
import { BugReportCountAggregate } from "../outputs/BugReportCountAggregate";
import { BugReportMaxAggregate } from "../outputs/BugReportMaxAggregate";
import { BugReportMinAggregate } from "../outputs/BugReportMinAggregate";
import { BugReportSumAggregate } from "../outputs/BugReportSumAggregate";

@TypeGraphQL.ObjectType("AggregateBugReport", {
  isAbstract: true
})
export class AggregateBugReport {
  @TypeGraphQL.Field(_type => BugReportCountAggregate, {
    nullable: true
  })
  _count!: BugReportCountAggregate | null;

  @TypeGraphQL.Field(_type => BugReportAvgAggregate, {
    nullable: true
  })
  _avg!: BugReportAvgAggregate | null;

  @TypeGraphQL.Field(_type => BugReportSumAggregate, {
    nullable: true
  })
  _sum!: BugReportSumAggregate | null;

  @TypeGraphQL.Field(_type => BugReportMinAggregate, {
    nullable: true
  })
  _min!: BugReportMinAggregate | null;

  @TypeGraphQL.Field(_type => BugReportMaxAggregate, {
    nullable: true
  })
  _max!: BugReportMaxAggregate | null;
}
