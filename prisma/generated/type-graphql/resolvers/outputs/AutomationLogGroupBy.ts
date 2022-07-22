import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogAvgAggregate } from "../outputs/AutomationLogAvgAggregate";
import { AutomationLogCountAggregate } from "../outputs/AutomationLogCountAggregate";
import { AutomationLogMaxAggregate } from "../outputs/AutomationLogMaxAggregate";
import { AutomationLogMinAggregate } from "../outputs/AutomationLogMinAggregate";
import { AutomationLogSumAggregate } from "../outputs/AutomationLogSumAggregate";

@TypeGraphQL.ObjectType("AutomationLogGroupBy", {
  isAbstract: true
})
export class AutomationLogGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  AutomationLogID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  Time!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  Success!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Message!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FileID!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_CourseOnTermAutomationID!: number;

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
