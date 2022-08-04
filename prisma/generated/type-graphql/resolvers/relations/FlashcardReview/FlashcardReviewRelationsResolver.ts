import * as TypeGraphQL from "type-graphql";
import { Flashcard } from "../../../models/Flashcard";
import { FlashcardReview } from "../../../models/FlashcardReview";
import { FlashcardStackReview } from "../../../models/FlashcardStackReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardReview)
export class FlashcardReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Flashcard, {
    nullable: true
  })
  async FK_Flashcard(@TypeGraphQL.Root() flashcardReview: FlashcardReview, @TypeGraphQL.Ctx() ctx: any): Promise<Flashcard | null> {
    return getPrismaFromContext(ctx).flashcardReview.findUnique({
      where: {
        FlashcardReviewID: flashcardReview.FlashcardReviewID,
      },
    }).FK_Flashcard({});
  }

  @TypeGraphQL.FieldResolver(_type => FlashcardStackReview, {
    nullable: true
  })
  async FK_FlashcardStackReview(@TypeGraphQL.Root() flashcardReview: FlashcardReview, @TypeGraphQL.Ctx() ctx: any): Promise<FlashcardStackReview | null> {
    return getPrismaFromContext(ctx).flashcardReview.findUnique({
      where: {
        FlashcardReviewID: flashcardReview.FlashcardReviewID,
      },
    }).FK_FlashcardStackReview({});
  }
}
