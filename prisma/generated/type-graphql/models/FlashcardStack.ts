import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Flashcard } from "../models/Flashcard";
import { FlashcardStackReview } from "../models/FlashcardStackReview";
import { Flow } from "../models/Flow";
import { Repetition } from "../models/Repetition";
import { FlashcardStackCount } from "../resolvers/outputs/FlashcardStackCount";

@TypeGraphQL.ObjectType("FlashcardStack", {
  isAbstract: true
})
export class FlashcardStack {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FlashcardStackID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | null;

  FK_Flow?: Flow | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID?: string | null;

  FK_Flashcards?: Flashcard[];

  FK_FlashcardStackReviews?: FlashcardStackReview[];

  FK_Repetition?: Repetition | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Description!: string;

  @TypeGraphQL.Field(_type => FlashcardStackCount, {
    nullable: true
  })
  _count?: FlashcardStackCount | null;
}
