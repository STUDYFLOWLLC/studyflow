import * as TypeGraphQL from "type-graphql";
import { Flow } from "../../../models/Flow";
import { FlowView } from "../../../models/FlowView";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowView)
export class FlowViewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Flow, {
    nullable: true
  })
  async FK_Flow(@TypeGraphQL.Root() flowView: FlowView, @TypeGraphQL.Ctx() ctx: any): Promise<Flow | null> {
    return getPrismaFromContext(ctx).flowView.findUnique({
      where: {
        FlowViewID: flowView.FlowViewID,
      },
    }).FK_Flow({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() flowView: FlowView, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).flowView.findUnique({
      where: {
        FlowViewID: flowView.FlowViewID,
      },
    }).FK_User({});
  }
}
