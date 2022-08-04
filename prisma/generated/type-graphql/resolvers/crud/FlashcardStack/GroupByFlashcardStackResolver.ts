import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFlashcardStackArgs } from "./args/GroupByFlashcardStackArgs";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { FlashcardStackGroupBy } from "../../outputs/FlashcardStackGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStack)
export class GroupByFlashcardStackResolver {
  @TypeGraphQL.Query(_returns => [FlashcardStackGroupBy], {
    nullable: false
  })
  async groupByFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFlashcardStackArgs): Promise<FlashcardStackGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
