import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermAvgAggregate } from "../outputs/TermAvgAggregate";
import { TermCountAggregate } from "../outputs/TermCountAggregate";
import { TermMaxAggregate } from "../outputs/TermMaxAggregate";
import { TermMinAggregate } from "../outputs/TermMinAggregate";
import { TermSumAggregate } from "../outputs/TermSumAggregate";

@TypeGraphQL.ObjectType("AggregateTerm", {
  isAbstract: true
})
export class AggregateTerm {
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
