import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAutomationLogArgs } from "./args/AggregateAutomationLogArgs";
import { AutomationLog } from "../../../models/AutomationLog";
import { AggregateAutomationLog } from "../../outputs/AggregateAutomationLog";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AutomationLog)
export class AggregateAutomationLogResolver {
  @TypeGraphQL.Query(_returns => AggregateAutomationLog, {
    nullable: false
  })
  async aggregateAutomationLog(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAutomationLogArgs): Promise<AggregateAutomationLog> {
    return getPrismaFromContext(ctx).automationLog.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
