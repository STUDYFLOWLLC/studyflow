import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstFlowViewArgs } from "./args/FindFirstFlowViewArgs";
import { FlowView } from "../../../models/FlowView";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowView)
export class FindFirstFlowViewResolver {
  @TypeGraphQL.Query(_returns => FlowView, {
    nullable: true
  })
  async findFirstFlowView(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFlowViewArgs): Promise<FlowView | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowView.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
