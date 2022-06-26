import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowAvgAggregate } from "../outputs/FlowAvgAggregate";
import { FlowCountAggregate } from "../outputs/FlowCountAggregate";
import { FlowMaxAggregate } from "../outputs/FlowMaxAggregate";
import { FlowMinAggregate } from "../outputs/FlowMinAggregate";
import { FlowSumAggregate } from "../outputs/FlowSumAggregate";
import { FlowType } from "../../enums/FlowType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.ObjectType("FlowGroupBy", {
  isAbstract: true
})
export class FlowGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FlowID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: false
  })
  Type!: "LECTURE" | "ASSIGNMENT" | "NOTE" | "EXAM";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body!: string | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: false
  })
  Visibility!: "HIDDEN" | "PRIVATE" | "PUBLIC";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID!: number | null;

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
