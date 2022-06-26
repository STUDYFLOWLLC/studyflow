import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlowArgs } from "./args/AggregateFlowArgs";
import { Flow } from "../../../models/Flow";
import { AggregateFlow } from "../../outputs/AggregateFlow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flow)
export class AggregateFlowResolver {
  @TypeGraphQL.Query(_returns => AggregateFlow, {
    nullable: false
  })
  async aggregateFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlowArgs): Promise<AggregateFlow> {
    return getPrismaFromContext(ctx).flow.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
