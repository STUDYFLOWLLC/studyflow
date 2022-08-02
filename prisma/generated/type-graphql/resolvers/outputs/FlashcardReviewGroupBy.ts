import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCountAggregate } from "../outputs/FlashcardReviewCountAggregate";
import { FlashcardReviewMaxAggregate } from "../outputs/FlashcardReviewMaxAggregate";
import { FlashcardReviewMinAggregate } from "../outputs/FlashcardReviewMinAggregate";
import { FlashcardStatus } from "../../enums/FlashcardStatus";

@TypeGraphQL.ObjectType("FlashcardReviewGroupBy", {
  isAbstract: true
})
export class FlashcardReviewGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FlashcardReviewID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardID!: string | null;

  @TypeGraphQL.Field(_type => FlashcardStatus, {
    nullable: false
  })
  Status!: "NEUTRAL" | "CORRECT" | "INCORRECT";

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
