import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardAvgAggregate } from "../outputs/FlashcardAvgAggregate";
import { FlashcardCountAggregate } from "../outputs/FlashcardCountAggregate";
import { FlashcardMaxAggregate } from "../outputs/FlashcardMaxAggregate";
import { FlashcardMinAggregate } from "../outputs/FlashcardMinAggregate";
import { FlashcardSumAggregate } from "../outputs/FlashcardSumAggregate";

@TypeGraphQL.ObjectType("AggregateFlashcard", {
  isAbstract: true
})
export class AggregateFlashcard {
  @TypeGraphQL.Field(_type => FlashcardCountAggregate, {
    nullable: true
  })
  _count!: FlashcardCountAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardAvgAggregate, {
    nullable: true
  })
  _avg!: FlashcardAvgAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardSumAggregate, {
    nullable: true
  })
  _sum!: FlashcardSumAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardMinAggregate, {
    nullable: true
  })
  _min!: FlashcardMinAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardMaxAggregate, {
    nullable: true
  })
  _max!: FlashcardMaxAggregate | null;
}
