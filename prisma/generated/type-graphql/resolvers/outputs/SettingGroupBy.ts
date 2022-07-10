import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingAvgAggregate } from "../outputs/SettingAvgAggregate";
import { SettingCountAggregate } from "../outputs/SettingCountAggregate";
import { SettingMaxAggregate } from "../outputs/SettingMaxAggregate";
import { SettingMinAggregate } from "../outputs/SettingMinAggregate";
import { SettingSumAggregate } from "../outputs/SettingSumAggregate";

@TypeGraphQL.ObjectType("SettingGroupBy", {
  isAbstract: true
})
export class SettingGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SettingID!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasSeenWelcomeMessage!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastSeenWelcomeMessageAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_UserID!: number;

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
