import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFlashcardStackReviewArgs } from "./args/FindUniqueFlashcardStackReviewArgs";
import { FlashcardStackReview } from "../../../models/FlashcardStackReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStackReview)
export class FindUniqueFlashcardStackReviewResolver {
  @TypeGraphQL.Query(_returns => FlashcardStackReview, {
    nullable: true
  })
  async flashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFlashcardStackReviewArgs): Promise<FlashcardStackReview | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
