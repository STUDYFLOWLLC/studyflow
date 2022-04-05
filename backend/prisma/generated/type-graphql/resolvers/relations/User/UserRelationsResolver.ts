import * as TypeGraphQL from "type-graphql";
import { Flow } from "../../../models/Flow";
import { User } from "../../../models/User";
import { UserFlowsArgs } from "./args/UserFlowsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Flow], {
    nullable: false
  })
  async Flows(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFlowsArgs): Promise<Flow[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).Flows(args);
  }
}
