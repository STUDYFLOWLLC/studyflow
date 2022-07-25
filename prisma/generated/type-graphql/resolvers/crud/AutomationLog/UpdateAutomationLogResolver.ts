import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateAutomationLogArgs } from "./args/UpdateAutomationLogArgs";
import { AutomationLog } from "../../../models/AutomationLog";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AutomationLog)
export class UpdateAutomationLogResolver {
  @TypeGraphQL.Mutation(_returns => AutomationLog, {
    nullable: true
  })
  async updateAutomationLog(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateAutomationLogArgs): Promise<AutomationLog | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).automationLog.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
