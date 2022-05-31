import * as TypeGraphQL from "type-graphql";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { Flow } from "../../../models/Flow";
import { FlowTagOnFlow } from "../../../models/FlowTagOnFlow";
import { User } from "../../../models/User";
import { FlowFK_FlashCardStacksArgs } from "./args/FlowFK_FlashCardStacksArgs";
import { FlowFK_TagsArgs } from "./args/FlowFK_TagsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flow)
export class FlowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).FK_User({});
  }

  @TypeGraphQL.FieldResolver(_type => [FlowTagOnFlow], {
    nullable: false
  })
  async FK_Tags(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlowFK_TagsArgs): Promise<FlowTagOnFlow[]> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).FK_Tags(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FlashCardStack], {
    nullable: false
  })
  async FK_FlashCardStacks(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlowFK_FlashCardStacksArgs): Promise<FlashCardStack[]> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).FK_FlashCardStacks(args);
  }
}
