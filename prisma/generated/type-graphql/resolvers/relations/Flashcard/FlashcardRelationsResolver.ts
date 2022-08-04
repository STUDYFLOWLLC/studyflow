import * as TypeGraphQL from "type-graphql";
import { Flashcard } from "../../../models/Flashcard";
import { FlashcardReview } from "../../../models/FlashcardReview";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { FlashcardFK_FlashcardReviewsArgs } from "./args/FlashcardFK_FlashcardReviewsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flashcard)
export class FlashcardRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => FlashcardStack, {
    nullable: true
  })
  async FK_FlashcardStack(@TypeGraphQL.Root() flashcard: Flashcard, @TypeGraphQL.Ctx() ctx: any): Promise<FlashcardStack | null> {
    return getPrismaFromContext(ctx).flashcard.findUnique({
      where: {
        FlashcardID: flashcard.FlashcardID,
      },
    }).FK_FlashcardStack({});
  }

  @TypeGraphQL.FieldResolver(_type => [FlashcardReview], {
    nullable: false
  })
  async FK_FlashcardReviews(@TypeGraphQL.Root() flashcard: Flashcard, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlashcardFK_FlashcardReviewsArgs): Promise<FlashcardReview[]> {
    return getPrismaFromContext(ctx).flashcard.findUnique({
      where: {
        FlashcardID: flashcard.FlashcardID,
      },
    }).FK_FlashcardReviews(args);
  }
}
