import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlashcardReviewArgs } from "./args/AggregateFlashcardReviewArgs";
import { FlashcardReview } from "../../../models/FlashcardReview";
import { AggregateFlashcardReview } from "../../outputs/AggregateFlashcardReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardReview)
export class AggregateFlashcardReviewResolver {
  @TypeGraphQL.Query(_returns => AggregateFlashcardReview, {
    nullable: false
  })
  async aggregateFlashcardReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlashcardReviewArgs): Promise<AggregateFlashcardReview> {
    return getPrismaFromContext(ctx).flashcardReview.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
