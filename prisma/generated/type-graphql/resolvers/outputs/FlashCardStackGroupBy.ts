import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackAvgAggregate } from "../outputs/FlashCardStackAvgAggregate";
import { FlashCardStackCountAggregate } from "../outputs/FlashCardStackCountAggregate";
import { FlashCardStackMaxAggregate } from "../outputs/FlashCardStackMaxAggregate";
import { FlashCardStackMinAggregate } from "../outputs/FlashCardStackMinAggregate";
import { FlashCardStackSumAggregate } from "../outputs/FlashCardStackSumAggregate";

@TypeGraphQL.ObjectType("FlashCardStackGroupBy", {
  isAbstract: true
})
export class FlashCardStackGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlashCardStackID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_FlowID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title!: string | null;

  @TypeGraphQL.Field(_type => FlashCardStackCountAggregate, {
    nullable: true
  })
  _count!: FlashCardStackCountAggregate | null;

  @TypeGraphQL.Field(_type => FlashCardStackAvgAggregate, {
    nullable: true
  })
  _avg!: FlashCardStackAvgAggregate | null;

  @TypeGraphQL.Field(_type => FlashCardStackSumAggregate, {
    nullable: true
  })
  _sum!: FlashCardStackSumAggregate | null;

  @TypeGraphQL.Field(_type => FlashCardStackMinAggregate, {
    nullable: true
  })
  _min!: FlashCardStackMinAggregate | null;

  @TypeGraphQL.Field(_type => FlashCardStackMaxAggregate, {
    nullable: true
  })
  _max!: FlashCardStackMaxAggregate | null;
}
