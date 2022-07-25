import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationAvgAggregate } from "../outputs/CourseOnTermAutomationAvgAggregate";
import { CourseOnTermAutomationCountAggregate } from "../outputs/CourseOnTermAutomationCountAggregate";
import { CourseOnTermAutomationMaxAggregate } from "../outputs/CourseOnTermAutomationMaxAggregate";
import { CourseOnTermAutomationMinAggregate } from "../outputs/CourseOnTermAutomationMinAggregate";
import { CourseOnTermAutomationSumAggregate } from "../outputs/CourseOnTermAutomationSumAggregate";

@TypeGraphQL.ObjectType("AggregateCourseOnTermAutomation", {
  isAbstract: true
})
export class AggregateCourseOnTermAutomation {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationCountAggregate, {
    nullable: true
  })
  _count!: CourseOnTermAutomationCountAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationAvgAggregate, {
    nullable: true
  })
  _avg!: CourseOnTermAutomationAvgAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationSumAggregate, {
    nullable: true
  })
  _sum!: CourseOnTermAutomationSumAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationMinAggregate, {
    nullable: true
  })
  _min!: CourseOnTermAutomationMinAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationMaxAggregate, {
    nullable: true
  })
  _max!: CourseOnTermAutomationMaxAggregate | null;
}
