import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlowTagOnFlowArgs } from "./args/AggregateFlowTagOnFlowArgs";
import { FlowTagOnFlow } from "../../../models/FlowTagOnFlow";
import { AggregateFlowTagOnFlow } from "../../outputs/AggregateFlowTagOnFlow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowTagOnFlow)
export class AggregateFlowTagOnFlowResolver {
  @TypeGraphQL.Query(_returns => AggregateFlowTagOnFlow, {
    nullable: false
  })
  async aggregateFlowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlowTagOnFlowArgs): Promise<AggregateFlowTagOnFlow> {
    return getPrismaFromContext(ctx).flowTagOnFlow.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
