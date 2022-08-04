import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlowViewArgs } from "./args/AggregateFlowViewArgs";
import { FlowView } from "../../../models/FlowView";
import { AggregateFlowView } from "../../outputs/AggregateFlowView";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowView)
export class AggregateFlowViewResolver {
  @TypeGraphQL.Query(_returns => AggregateFlowView, {
    nullable: false
  })
  async aggregateFlowView(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlowViewArgs): Promise<AggregateFlowView> {
    return getPrismaFromContext(ctx).flowView.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
