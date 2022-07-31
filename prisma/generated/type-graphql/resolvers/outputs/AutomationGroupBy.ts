import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationAvgAggregate } from "../outputs/AutomationAvgAggregate";
import { AutomationCountAggregate } from "../outputs/AutomationCountAggregate";
import { AutomationMaxAggregate } from "../outputs/AutomationMaxAggregate";
import { AutomationMinAggregate } from "../outputs/AutomationMinAggregate";
import { AutomationSumAggregate } from "../outputs/AutomationSumAggregate";

@TypeGraphQL.ObjectType("AutomationGroupBy", {
  isAbstract: true
})
export class AutomationGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  AutomationID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RefreshToken!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_UserID!: number;

  @TypeGraphQL.Field(_type => AutomationCountAggregate, {
    nullable: true
  })
  _count!: AutomationCountAggregate | null;

  @TypeGraphQL.Field(_type => AutomationAvgAggregate, {
    nullable: true
  })
  _avg!: AutomationAvgAggregate | null;

  @TypeGraphQL.Field(_type => AutomationSumAggregate, {
    nullable: true
  })
  _sum!: AutomationSumAggregate | null;

  @TypeGraphQL.Field(_type => AutomationMinAggregate, {
    nullable: true
  })
  _min!: AutomationMinAggregate | null;

  @TypeGraphQL.Field(_type => AutomationMaxAggregate, {
    nullable: true
  })
  _max!: AutomationMaxAggregate | null;
}
