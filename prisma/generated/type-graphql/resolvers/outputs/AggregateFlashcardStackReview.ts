import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCountAggregate } from "../outputs/FlashcardStackReviewCountAggregate";
import { FlashcardStackReviewMaxAggregate } from "../outputs/FlashcardStackReviewMaxAggregate";
import { FlashcardStackReviewMinAggregate } from "../outputs/FlashcardStackReviewMinAggregate";

@TypeGraphQL.ObjectType("AggregateFlashcardStackReview", {
  isAbstract: true
})
export class AggregateFlashcardStackReview {
  @TypeGraphQL.Field(_type => FlashcardStackReviewCountAggregate, {
    nullable: true
  })
  _count!: FlashcardStackReviewCountAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardStackReviewMinAggregate, {
    nullable: true
  })
  _min!: FlashcardStackReviewMinAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardStackReviewMaxAggregate, {
    nullable: true
  })
  _max!: FlashcardStackReviewMaxAggregate | null;
}
