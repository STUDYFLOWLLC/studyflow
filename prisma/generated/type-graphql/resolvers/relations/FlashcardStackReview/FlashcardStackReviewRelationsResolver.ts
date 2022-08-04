import * as TypeGraphQL from "type-graphql";
import { FlashcardReview } from "../../../models/FlashcardReview";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { FlashcardStackReview } from "../../../models/FlashcardStackReview";
import { FlashcardStackReviewFK_FlashcardReviewsArgs } from "./args/FlashcardStackReviewFK_FlashcardReviewsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStackReview)
export class FlashcardStackReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => FlashcardStack, {
    nullable: true
  })
  async FK_FlashcardStack(@TypeGraphQL.Root() flashcardStackReview: FlashcardStackReview, @TypeGraphQL.Ctx() ctx: any): Promise<FlashcardStack | null> {
    return getPrismaFromContext(ctx).flashcardStackReview.findUnique({
      where: {
        FlashcardStackReviewID: flashcardStackReview.FlashcardStackReviewID,
      },
    }).FK_FlashcardStack({});
  }

  @TypeGraphQL.FieldResolver(_type => [FlashcardReview], {
    nullable: false
  })
  async FK_FlashcardReviews(@TypeGraphQL.Root() flashcardStackReview: FlashcardStackReview, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlashcardStackReviewFK_FlashcardReviewsArgs): Promise<FlashcardReview[]> {
    return getPrismaFromContext(ctx).flashcardStackReview.findUnique({
      where: {
        FlashcardStackReviewID: flashcardStackReview.FlashcardStackReviewID,
      },
    }).FK_FlashcardReviews(args);
  }
}
