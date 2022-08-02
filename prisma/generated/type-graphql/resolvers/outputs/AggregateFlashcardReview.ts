import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCountAggregate } from "../outputs/FlashcardReviewCountAggregate";
import { FlashcardReviewMaxAggregate } from "../outputs/FlashcardReviewMaxAggregate";
import { FlashcardReviewMinAggregate } from "../outputs/FlashcardReviewMinAggregate";

@TypeGraphQL.ObjectType("AggregateFlashcardReview", {
  isAbstract: true
})
export class AggregateFlashcardReview {
  @TypeGraphQL.Field(_type => FlashcardReviewCountAggregate, {
    nullable: true
  })
  _count!: FlashcardReviewCountAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardReviewMinAggregate, {
    nullable: true
  })
  _min!: FlashcardReviewMinAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardReviewMaxAggregate, {
    nullable: true
  })
  _max!: FlashcardReviewMaxAggregate | null;
}
