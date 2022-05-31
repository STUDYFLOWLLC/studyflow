import * as TypeGraphQL from "type-graphql";
import { Flow } from "../../../models/Flow";
import { FlowTag } from "../../../models/FlowTag";
import { FlowTagOnFlow } from "../../../models/FlowTagOnFlow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowTagOnFlow)
export class FlowTagOnFlowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Flow, {
    nullable: true
  })
  async FK_Flow(@TypeGraphQL.Root() flowTagOnFlow: FlowTagOnFlow, @TypeGraphQL.Ctx() ctx: any): Promise<Flow | null> {
    return getPrismaFromContext(ctx).flowTagOnFlow.findUnique({
      where: {
        FlowTagOnFlowID: flowTagOnFlow.FlowTagOnFlowID,
      },
    }).FK_Flow({});
  }

  @TypeGraphQL.FieldResolver(_type => FlowTag, {
    nullable: true
  })
  async FK_FlowTag(@TypeGraphQL.Root() flowTagOnFlow: FlowTagOnFlow, @TypeGraphQL.Ctx() ctx: any): Promise<FlowTag | null> {
    return getPrismaFromContext(ctx).flowTagOnFlow.findUnique({
      where: {
        FlowTagOnFlowID: flowTagOnFlow.FlowTagOnFlowID,
      },
    }).FK_FlowTag({});
  }
}
