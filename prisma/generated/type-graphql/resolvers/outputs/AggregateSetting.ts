import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingAvgAggregate } from "../outputs/SettingAvgAggregate";
import { SettingCountAggregate } from "../outputs/SettingCountAggregate";
import { SettingMaxAggregate } from "../outputs/SettingMaxAggregate";
import { SettingMinAggregate } from "../outputs/SettingMinAggregate";
import { SettingSumAggregate } from "../outputs/SettingSumAggregate";

@TypeGraphQL.ObjectType("AggregateSetting", {
  isAbstract: true
})
export class AggregateSetting {
  @TypeGraphQL.Field(_type => SettingCountAggregate, {
    nullable: true
  })
  _count!: SettingCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingAvgAggregate, {
    nullable: true
  })
  _avg!: SettingAvgAggregate | null;

  @TypeGraphQL.Field(_type => SettingSumAggregate, {
    nullable: true
  })
  _sum!: SettingSumAggregate | null;

  @TypeGraphQL.Field(_type => SettingMinAggregate, {
    nullable: true
  })
  _min!: SettingMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingMaxAggregate, {
    nullable: true
  })
  _max!: SettingMaxAggregate | null;
}
