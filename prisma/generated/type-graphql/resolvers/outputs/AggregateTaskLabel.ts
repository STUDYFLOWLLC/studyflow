import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelAvgAggregate } from "../outputs/TaskLabelAvgAggregate";
import { TaskLabelCountAggregate } from "../outputs/TaskLabelCountAggregate";
import { TaskLabelMaxAggregate } from "../outputs/TaskLabelMaxAggregate";
import { TaskLabelMinAggregate } from "../outputs/TaskLabelMinAggregate";
import { TaskLabelSumAggregate } from "../outputs/TaskLabelSumAggregate";

@TypeGraphQL.ObjectType("AggregateTaskLabel", {
  isAbstract: true
})
export class AggregateTaskLabel {
  @TypeGraphQL.Field(_type => TaskLabelCountAggregate, {
    nullable: true
  })
  _count!: TaskLabelCountAggregate | null;

  @TypeGraphQL.Field(_type => TaskLabelAvgAggregate, {
    nullable: true
  })
  _avg!: TaskLabelAvgAggregate | null;

  @TypeGraphQL.Field(_type => TaskLabelSumAggregate, {
    nullable: true
  })
  _sum!: TaskLabelSumAggregate | null;

  @TypeGraphQL.Field(_type => TaskLabelMinAggregate, {
    nullable: true
  })
  _min!: TaskLabelMinAggregate | null;

  @TypeGraphQL.Field(_type => TaskLabelMaxAggregate, {
    nullable: true
  })
  _max!: TaskLabelMaxAggregate | null;
}
