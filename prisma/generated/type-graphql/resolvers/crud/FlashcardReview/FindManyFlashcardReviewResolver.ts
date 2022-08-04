import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyFlashcardReviewArgs } from "./args/FindManyFlashcardReviewArgs";
import { FlashcardReview } from "../../../models/FlashcardReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardReview)
export class FindManyFlashcardReviewResolver {
  @TypeGraphQL.Query(_returns => [FlashcardReview], {
    nullable: false
  })
  async flashcardReviews(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFlashcardReviewArgs): Promise<FlashcardReview[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardReview.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
