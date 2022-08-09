import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyFeatureRequestArgs } from "./args/FindManyFeatureRequestArgs";
import { FeatureRequest } from "../../../models/FeatureRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FeatureRequest)
export class FindManyFeatureRequestResolver {
  @TypeGraphQL.Query(_returns => [FeatureRequest], {
    nullable: false
  })
  async featureRequests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFeatureRequestArgs): Promise<FeatureRequest[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
