import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFlashCardArgs } from "./args/GroupByFlashCardArgs";
import { FlashCard } from "../../../models/FlashCard";
import { FlashCardGroupBy } from "../../outputs/FlashCardGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCard)
export class GroupByFlashCardResolver {
  @TypeGraphQL.Query(_returns => [FlashCardGroupBy], {
    nullable: false
  })
  async groupByFlashCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFlashCardArgs): Promise<FlashCardGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashCard.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
