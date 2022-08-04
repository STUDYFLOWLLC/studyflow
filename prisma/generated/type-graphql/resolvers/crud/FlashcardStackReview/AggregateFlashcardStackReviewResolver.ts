import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlashcardStackReviewArgs } from "./args/AggregateFlashcardStackReviewArgs";
import { FlashcardStackReview } from "../../../models/FlashcardStackReview";
import { AggregateFlashcardStackReview } from "../../outputs/AggregateFlashcardStackReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStackReview)
export class AggregateFlashcardStackReviewResolver {
  @TypeGraphQL.Query(_returns => AggregateFlashcardStackReview, {
    nullable: false
  })
  async aggregateFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlashcardStackReviewArgs): Promise<AggregateFlashcardStackReview> {
    return getPrismaFromContext(ctx).flashcardStackReview.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
