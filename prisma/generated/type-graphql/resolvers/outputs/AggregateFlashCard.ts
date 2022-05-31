import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardAvgAggregate } from "../outputs/FlashCardAvgAggregate";
import { FlashCardCountAggregate } from "../outputs/FlashCardCountAggregate";
import { FlashCardMaxAggregate } from "../outputs/FlashCardMaxAggregate";
import { FlashCardMinAggregate } from "../outputs/FlashCardMinAggregate";
import { FlashCardSumAggregate } from "../outputs/FlashCardSumAggregate";

@TypeGraphQL.ObjectType("AggregateFlashCard", {
  isAbstract: true
})
export class AggregateFlashCard {
  @TypeGraphQL.Field(_type => FlashCardCountAggregate, {
    nullable: true
  })
  _count!: FlashCardCountAggregate | null;

  @TypeGraphQL.Field(_type => FlashCardAvgAggregate, {
    nullable: true
  })
  _avg!: FlashCardAvgAggregate | null;

  @TypeGraphQL.Field(_type => FlashCardSumAggregate, {
    nullable: true
  })
  _sum!: FlashCardSumAggregate | null;

  @TypeGraphQL.Field(_type => FlashCardMinAggregate, {
    nullable: true
  })
  _min!: FlashCardMinAggregate | null;

  @TypeGraphQL.Field(_type => FlashCardMaxAggregate, {
    nullable: true
  })
  _max!: FlashCardMaxAggregate | null;
}
