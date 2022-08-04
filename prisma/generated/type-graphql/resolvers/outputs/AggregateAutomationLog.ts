import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogAvgAggregate } from "../outputs/AutomationLogAvgAggregate";
import { AutomationLogCountAggregate } from "../outputs/AutomationLogCountAggregate";
import { AutomationLogMaxAggregate } from "../outputs/AutomationLogMaxAggregate";
import { AutomationLogMinAggregate } from "../outputs/AutomationLogMinAggregate";
import { AutomationLogSumAggregate } from "../outputs/AutomationLogSumAggregate";

@TypeGraphQL.ObjectType("AggregateAutomationLog", {
  isAbstract: true
})
export class AggregateAutomationLog {
  @TypeGraphQL.Field(_type => AutomationLogCountAggregate, {
    nullable: true
  })
  _count!: AutomationLogCountAggregate | null;

  @TypeGraphQL.Field(_type => AutomationLogAvgAggregate, {
    nullable: true
  })
  _avg!: AutomationLogAvgAggregate | null;

  @TypeGraphQL.Field(_type => AutomationLogSumAggregate, {
    nullable: true
  })
  _sum!: AutomationLogSumAggregate | null;

  @TypeGraphQL.Field(_type => AutomationLogMinAggregate, {
    nullable: true
  })
  _min!: AutomationLogMinAggregate | null;

  @TypeGraphQL.Field(_type => AutomationLogMaxAggregate, {
    nullable: true
  })
  _max!: AutomationLogMaxAggregate | null;
}
