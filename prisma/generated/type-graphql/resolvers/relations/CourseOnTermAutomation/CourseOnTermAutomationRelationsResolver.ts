import * as TypeGraphQL from "type-graphql";
import { Automation } from "../../../models/Automation";
import { AutomationLog } from "../../../models/AutomationLog";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { CourseOnTermAutomationAutomationLogArgs } from "./args/CourseOnTermAutomationAutomationLogArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTermAutomation)
export class CourseOnTermAutomationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [AutomationLog], {
    nullable: false
  })
  async AutomationLog(@TypeGraphQL.Root() courseOnTermAutomation: CourseOnTermAutomation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseOnTermAutomationAutomationLogArgs): Promise<AutomationLog[]> {
    return getPrismaFromContext(ctx).courseOnTermAutomation.findUnique({
      where: {
        CourseOnTermAutomationID: courseOnTermAutomation.CourseOnTermAutomationID,
      },
    }).AutomationLog(args);
  }

  @TypeGraphQL.FieldResolver(_type => Automation, {
    nullable: true
  })
  async FK_Automation(@TypeGraphQL.Root() courseOnTermAutomation: CourseOnTermAutomation, @TypeGraphQL.Ctx() ctx: any): Promise<Automation | null> {
    return getPrismaFromContext(ctx).courseOnTermAutomation.findUnique({
      where: {
        CourseOnTermAutomationID: courseOnTermAutomation.CourseOnTermAutomationID,
      },
    }).FK_Automation({});
  }

  @TypeGraphQL.FieldResolver(_type => CourseOnTerm, {
    nullable: true
  })
  async FK_CourseOnTerm(@TypeGraphQL.Root() courseOnTermAutomation: CourseOnTermAutomation, @TypeGraphQL.Ctx() ctx: any): Promise<CourseOnTerm | null> {
    return getPrismaFromContext(ctx).courseOnTermAutomation.findUnique({
      where: {
        CourseOnTermAutomationID: courseOnTermAutomation.CourseOnTermAutomationID,
      },
    }).FK_CourseOnTerm({});
  }
}
