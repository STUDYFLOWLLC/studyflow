import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteFlowViewArgs } from "./args/DeleteFlowViewArgs";
import { FlowView } from "../../../models/FlowView";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowView)
export class DeleteFlowViewResolver {
  @TypeGraphQL.Mutation(_returns => FlowView, {
    nullable: true
  })
  async deleteFlowView(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteFlowViewArgs): Promise<FlowView | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flowView.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
