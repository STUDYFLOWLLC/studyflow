import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FlashcardReview } from "../models/FlashcardReview";
import { FlashcardStack } from "../models/FlashcardStack";
import { FlashcardStackReviewCount } from "../resolvers/outputs/FlashcardStackReviewCount";

@TypeGraphQL.ObjectType("FlashcardStackReview", {
  isAbstract: true
})
export class FlashcardStackReview {
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
  EndTime?: Date | null;

  FK_FlashcardStack?: FlashcardStack | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID?: string | null;

  FK_FlashcardReviews?: FlashcardReview[];

  @TypeGraphQL.Field(_type => FlashcardStackReviewCount, {
    nullable: true
  })
  _count?: FlashcardStackReviewCount | null;
}
