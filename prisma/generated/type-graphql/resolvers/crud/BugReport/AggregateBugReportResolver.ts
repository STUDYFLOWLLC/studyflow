import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBugReportArgs } from "./args/AggregateBugReportArgs";
import { BugReport } from "../../../models/BugReport";
import { AggregateBugReport } from "../../outputs/AggregateBugReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BugReport)
export class AggregateBugReportResolver {
  @TypeGraphQL.Query(_returns => AggregateBugReport, {
    nullable: false
  })
  async aggregateBugReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBugReportArgs): Promise<AggregateBugReport> {
    return getPrismaFromContext(ctx).bugReport.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
