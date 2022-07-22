import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByAutomationLogArgs } from "./args/GroupByAutomationLogArgs";
import { AutomationLog } from "../../../models/AutomationLog";
import { AutomationLogGroupBy } from "../../outputs/AutomationLogGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AutomationLog)
export class GroupByAutomationLogResolver {
  @TypeGraphQL.Query(_returns => [AutomationLogGroupBy], {
    nullable: false
  })
  async groupByAutomationLog(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAutomationLogArgs): Promise<AutomationLogGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).automationLog.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
