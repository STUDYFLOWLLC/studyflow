import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FlashcardReview } from "../models/FlashcardReview";
import { FlashcardStack } from "../models/FlashcardStack";
import { FlashcardCount } from "../resolvers/outputs/FlashcardCount";

@TypeGraphQL.ObjectType("Flashcard", {
  isAbstract: true
})
export class Flashcard {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FlashcardID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | null;

  FK_FlashcardStack?: FlashcardStack | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Front!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FrontImageUrl?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Back!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BackImageUrl?: string | null;

  FK_FlashcardReviews?: FlashcardReview[];

  @TypeGraphQL.Field(_type => FlashcardCount, {
    nullable: true
  })
  _count?: FlashcardCount | null;
}
