import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateFlashcardStackReviewArgs } from "./args/UpdateFlashcardStackReviewArgs";
import { FlashcardStackReview } from "../../../models/FlashcardStackReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStackReview)
export class UpdateFlashcardStackReviewResolver {
  @TypeGraphQL.Mutation(_returns => FlashcardStackReview, {
    nullable: true
  })
  async updateFlashcardStackReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateFlashcardStackReviewArgs): Promise<FlashcardStackReview | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStackReview.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
