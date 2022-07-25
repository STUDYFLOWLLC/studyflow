import * as TypeGraphQL from "type-graphql";
import { AutomationLog } from "../../../models/AutomationLog";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AutomationLog)
export class AutomationLogRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CourseOnTermAutomation, {
    nullable: true
  })
  async FK_CourseOnTermAutomation(@TypeGraphQL.Root() automationLog: AutomationLog, @TypeGraphQL.Ctx() ctx: any): Promise<CourseOnTermAutomation | null> {
    return getPrismaFromContext(ctx).automationLog.findUnique({
      where: {
        AutomationLogID: automationLog.AutomationLogID,
      },
    }).FK_CourseOnTermAutomation({});
  }
}
