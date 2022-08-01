import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Flashcard } from "../models/Flashcard";
import { FlashcardStatus } from "../enums/FlashcardStatus";

@TypeGraphQL.ObjectType("FlashcardReview", {
  isAbstract: true
})
export class FlashcardReview {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FlashcardReviewID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  FK_Flashcard?: Flashcard | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardID?: string | null;

  @TypeGraphQL.Field(_type => FlashcardStatus, {
    nullable: false
  })
  Status!: "NEUTRAL" | "CORRECT" | "INCORRECT";
}
