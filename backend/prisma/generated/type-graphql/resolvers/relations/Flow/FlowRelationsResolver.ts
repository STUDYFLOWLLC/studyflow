import * as TypeGraphQL from "type-graphql";
import { Flow } from "../../../models/Flow";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flow)
export class FlowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async CreatedByUser(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).CreatedByUser({});
  }
}
