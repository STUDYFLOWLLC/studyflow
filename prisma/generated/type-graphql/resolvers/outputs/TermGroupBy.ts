import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermAvgAggregate } from "../outputs/TermAvgAggregate";
import { TermCountAggregate } from "../outputs/TermCountAggregate";
import { TermMaxAggregate } from "../outputs/TermMaxAggregate";
import { TermMinAggregate } from "../outputs/TermMinAggregate";
import { TermSumAggregate } from "../outputs/TermSumAggregate";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.ObjectType("TermGroupBy", {
  isAbstract: true
})
export class TermGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  TermID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => TermType, {
    nullable: false
  })
  TermType!: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TermName!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID!: number | null;

  @TypeGraphQL.Field(_type => TermCountAggregate, {
    nullable: true
  })
  _count!: TermCountAggregate | null;

  @TypeGraphQL.Field(_type => TermAvgAggregate, {
    nullable: true
  })
  _avg!: TermAvgAggregate | null;

  @TypeGraphQL.Field(_type => TermSumAggregate, {
    nullable: true
  })
  _sum!: TermSumAggregate | null;

  @TypeGraphQL.Field(_type => TermMinAggregate, {
    nullable: true
  })
  _min!: TermMinAggregate | null;

  @TypeGraphQL.Field(_type => TermMaxAggregate, {
    nullable: true
  })
  _max!: TermMaxAggregate | null;
}
