import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFeatureRequestArgs } from "./args/GroupByFeatureRequestArgs";
import { FeatureRequest } from "../../../models/FeatureRequest";
import { FeatureRequestGroupBy } from "../../outputs/FeatureRequestGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FeatureRequest)
export class GroupByFeatureRequestResolver {
  @TypeGraphQL.Query(_returns => [FeatureRequestGroupBy], {
    nullable: false
  })
  async groupByFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFeatureRequestArgs): Promise<FeatureRequestGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
