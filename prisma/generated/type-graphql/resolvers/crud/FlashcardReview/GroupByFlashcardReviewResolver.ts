import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFlashcardReviewArgs } from "./args/GroupByFlashcardReviewArgs";
import { FlashcardReview } from "../../../models/FlashcardReview";
import { FlashcardReviewGroupBy } from "../../outputs/FlashcardReviewGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardReview)
export class GroupByFlashcardReviewResolver {
  @TypeGraphQL.Query(_returns => [FlashcardReviewGroupBy], {
    nullable: false
  })
  async groupByFlashcardReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFlashcardReviewArgs): Promise<FlashcardReviewGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardReview.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
