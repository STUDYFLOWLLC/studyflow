import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateFeatureRequestArgs } from "./args/UpdateFeatureRequestArgs";
import { FeatureRequest } from "../../../models/FeatureRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FeatureRequest)
export class UpdateFeatureRequestResolver {
  @TypeGraphQL.Mutation(_returns => FeatureRequest, {
    nullable: true
  })
  async updateFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateFeatureRequestArgs): Promise<FeatureRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
