import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCountAggregate } from "../outputs/FlashcardStackCountAggregate";
import { FlashcardStackMaxAggregate } from "../outputs/FlashcardStackMaxAggregate";
import { FlashcardStackMinAggregate } from "../outputs/FlashcardStackMinAggregate";

@TypeGraphQL.ObjectType("AggregateFlashcardStack", {
  isAbstract: true
})
export class AggregateFlashcardStack {
  @TypeGraphQL.Field(_type => FlashcardStackCountAggregate, {
    nullable: true
  })
  _count!: FlashcardStackCountAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardStackMinAggregate, {
    nullable: true
  })
  _min!: FlashcardStackMinAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardStackMaxAggregate, {
    nullable: true
  })
  _max!: FlashcardStackMaxAggregate | null;
}
