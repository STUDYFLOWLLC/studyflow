import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFeatureRequestArgs } from "./args/AggregateFeatureRequestArgs";
import { FeatureRequest } from "../../../models/FeatureRequest";
import { AggregateFeatureRequest } from "../../outputs/AggregateFeatureRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FeatureRequest)
export class AggregateFeatureRequestResolver {
  @TypeGraphQL.Query(_returns => AggregateFeatureRequest, {
    nullable: false
  })
  async aggregateFeatureRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFeatureRequestArgs): Promise<AggregateFeatureRequest> {
    return getPrismaFromContext(ctx).featureRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
