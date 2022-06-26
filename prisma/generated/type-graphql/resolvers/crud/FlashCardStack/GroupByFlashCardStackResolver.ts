import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFlashCardStackArgs } from "./args/GroupByFlashCardStackArgs";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { FlashCardStackGroupBy } from "../../outputs/FlashCardStackGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCardStack)
export class GroupByFlashCardStackResolver {
  @TypeGraphQL.Query(_returns => [FlashCardStackGroupBy], {
    nullable: false
  })
  async groupByFlashCardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFlashCardStackArgs): Promise<FlashCardStackGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashCardStack.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
