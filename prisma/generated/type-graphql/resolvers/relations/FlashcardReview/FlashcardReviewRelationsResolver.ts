import * as TypeGraphQL from "type-graphql";
import { Flashcard } from "../../../models/Flashcard";
import { FlashcardReview } from "../../../models/FlashcardReview";
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
}
