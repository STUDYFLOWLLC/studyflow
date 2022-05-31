import * as TypeGraphQL from "type-graphql";
import { FlowTag } from "../../../models/FlowTag";
import { FlowTagOnFlow } from "../../../models/FlowTagOnFlow";
import { User } from "../../../models/User";
import { FlowTagFK_FlowsArgs } from "./args/FlowTagFK_FlowsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlowTag)
export class FlowTagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() flowTag: FlowTag, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).flowTag.findUnique({
      where: {
        FlowTagID: flowTag.FlowTagID,
      },
    }).FK_User({});
  }

  @TypeGraphQL.FieldResolver(_type => [FlowTagOnFlow], {
    nullable: false
  })
  async FK_Flows(@TypeGraphQL.Root() flowTag: FlowTag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlowTagFK_FlowsArgs): Promise<FlowTagOnFlow[]> {
    return getPrismaFromContext(ctx).flowTag.findUnique({
      where: {
        FlowTagID: flowTag.FlowTagID,
      },
    }).FK_Flows(args);
  }
}
