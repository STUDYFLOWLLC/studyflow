import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyFlashcardStackReviewArgs } from "./args/FindManyFlashcardStackReviewArgs";
import { FlashcardStackReview } from "../../../models/FlashcardStackReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStackReview)
export class FindManyFlashcardStackReviewResolver {
  @TypeGraphQL.Query(_returns => [FlashcardStackReview], {
    nullable: false
  })
  async flashcardStackReviews(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFlashcardStackReviewArgs): Promise<FlashcardStackReview[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
