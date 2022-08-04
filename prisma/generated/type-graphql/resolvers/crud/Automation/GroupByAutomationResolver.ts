import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByAutomationArgs } from "./args/GroupByAutomationArgs";
import { Automation } from "../../../models/Automation";
import { AutomationGroupBy } from "../../outputs/AutomationGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Automation)
export class GroupByAutomationResolver {
  @TypeGraphQL.Query(_returns => [AutomationGroupBy], {
    nullable: false
  })
  async groupByAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAutomationArgs): Promise<AutomationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).automation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
