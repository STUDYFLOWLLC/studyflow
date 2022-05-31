import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFlowTagOnFlowArgs } from "./args/FindUniqueFlowTagOnFlowArgs";
import { FlowTagOnFlow } from "../../../models/FlowTagOnFlow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowTagOnFlow)
export class FindUniqueFlowTagOnFlowResolver {
  @TypeGraphQL.Query(_returns => FlowTagOnFlow, {
    nullable: true
  })
  async flowTagOnFlow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFlowTagOnFlowArgs): Promise<FlowTagOnFlow | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowTagOnFlow.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
