import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlowTagArgs } from "./args/AggregateFlowTagArgs";
import { FlowTag } from "../../../models/FlowTag";
import { AggregateFlowTag } from "../../outputs/AggregateFlowTag";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowTag)
export class AggregateFlowTagResolver {
  @TypeGraphQL.Query(_returns => AggregateFlowTag, {
    nullable: false
  })
  async aggregateFlowTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlowTagArgs): Promise<AggregateFlowTag> {
    return getPrismaFromContext(ctx).flowTag.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
