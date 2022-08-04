import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCountAggregate } from "../outputs/FlashcardStackReviewCountAggregate";
import { FlashcardStackReviewMaxAggregate } from "../outputs/FlashcardStackReviewMaxAggregate";
import { FlashcardStackReviewMinAggregate } from "../outputs/FlashcardStackReviewMinAggregate";

@TypeGraphQL.ObjectType("FlashcardStackReviewGroupBy", {
  isAbstract: true
})
export class FlashcardStackReviewGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FlashcardStackReviewID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  EndTime!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID!: string | null;

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
