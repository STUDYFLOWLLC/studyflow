import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFlashcardArgs } from "./args/GroupByFlashcardArgs";
import { Flashcard } from "../../../models/Flashcard";
import { FlashcardGroupBy } from "../../outputs/FlashcardGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flashcard)
export class GroupByFlashcardResolver {
  @TypeGraphQL.Query(_returns => [FlashcardGroupBy], {
    nullable: false
  })
  async groupByFlashcard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFlashcardArgs): Promise<FlashcardGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcard.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
