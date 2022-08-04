import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFlashcardReviewArgs } from "./args/FindUniqueFlashcardReviewArgs";
import { FlashcardReview } from "../../../models/FlashcardReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardReview)
export class FindUniqueFlashcardReviewResolver {
  @TypeGraphQL.Query(_returns => FlashcardReview, {
    nullable: true
  })
  async flashcardReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFlashcardReviewArgs): Promise<FlashcardReview | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardReview.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
