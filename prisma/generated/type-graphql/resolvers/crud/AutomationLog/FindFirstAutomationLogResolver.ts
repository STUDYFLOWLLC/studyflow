import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstAutomationLogArgs } from "./args/FindFirstAutomationLogArgs";
import { AutomationLog } from "../../../models/AutomationLog";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AutomationLog)
export class FindFirstAutomationLogResolver {
  @TypeGraphQL.Query(_returns => AutomationLog, {
    nullable: true
  })
  async findFirstAutomationLog(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAutomationLogArgs): Promise<AutomationLog | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).automationLog.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
