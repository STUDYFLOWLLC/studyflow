import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateFeatureRequestArgs } from "./args/CreateFeatureRequestArgs";
import { FeatureRequest } from "../../../models/FeatureRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FeatureRequest)
export class CreateFeatureRequestResolver {
  @TypeGraphQL.Mutation(_returns => FeatureRequest, {
    nullable: false
  })
  async createFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateFeatureRequestArgs): Promise<FeatureRequest> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).featureRequest.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
