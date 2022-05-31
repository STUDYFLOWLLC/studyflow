import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFlowTagOnFlowArgs } from "./args/GroupByFlowTagOnFlowArgs";
import { FlowTagOnFlow } from "../../../models/FlowTagOnFlow";
import { FlowTagOnFlowGroupBy } from "../../outputs/FlowTagOnFlowGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowTagOnFlow)
export class GroupByFlowTagOnFlowResolver {
  @TypeGraphQL.Query(_returns => [FlowTagOnFlowGroupBy], {
    nullable: false
  })
  async groupByFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFlowTagOnFlowArgs): Promise<FlowTagOnFlowGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
