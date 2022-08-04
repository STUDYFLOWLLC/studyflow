import * as TypeGraphQL from "type-graphql";
import { Flashcard } from "../../../models/Flashcard";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { FlashcardStackReview } from "../../../models/FlashcardStackReview";
import { Flow } from "../../../models/Flow";
import { Repetition } from "../../../models/Repetition";
import { FlashcardStackFK_FlashcardStackReviewsArgs } from "./args/FlashcardStackFK_FlashcardStackReviewsArgs";
import { FlashcardStackFK_FlashcardsArgs } from "./args/FlashcardStackFK_FlashcardsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStack)
export class FlashcardStackRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Flow, {
    nullable: true
  })
  async FK_Flow(@TypeGraphQL.Root() flashcardStack: FlashcardStack, @TypeGraphQL.Ctx() ctx: any): Promise<Flow | null> {
    return getPrismaFromContext(ctx).flashcardStack.findUnique({
      where: {
        FlashcardStackID: flashcardStack.FlashcardStackID,
      },
    }).FK_Flow({});
  }

  @TypeGraphQL.FieldResolver(_type => [Flashcard], {
    nullable: false
  })
  async FK_Flashcards(@TypeGraphQL.Root() flashcardStack: FlashcardStack, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlashcardStackFK_FlashcardsArgs): Promise<Flashcard[]> {
    return getPrismaFromContext(ctx).flashcardStack.findUnique({
      where: {
        FlashcardStackID: flashcardStack.FlashcardStackID,
      },
    }).FK_Flashcards(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FlashcardStackReview], {
    nullable: false
  })
  async FK_FlashcardStackReviews(@TypeGraphQL.Root() flashcardStack: FlashcardStack, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlashcardStackFK_FlashcardStackReviewsArgs): Promise<FlashcardStackReview[]> {
    return getPrismaFromContext(ctx).flashcardStack.findUnique({
      where: {
        FlashcardStackID: flashcardStack.FlashcardStackID,
      },
    }).FK_FlashcardStackReviews(args);
  }

  @TypeGraphQL.FieldResolver(_type => Repetition, {
    nullable: true
  })
  async FK_Repetition(@TypeGraphQL.Root() flashcardStack: FlashcardStack, @TypeGraphQL.Ctx() ctx: any): Promise<Repetition | null> {
    return getPrismaFromContext(ctx).flashcardStack.findUnique({
      where: {
        FlashcardStackID: flashcardStack.FlashcardStackID,
      },
    }).FK_Repetition({});
  }
}
