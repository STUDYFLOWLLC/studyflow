import * as TypeGraphQL from "type-graphql";
import { Automation } from "../../../models/Automation";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { User } from "../../../models/User";
import { AutomationCourseOnTermAutomationsArgs } from "./args/AutomationCourseOnTermAutomationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Automation)
export class AutomationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CourseOnTermAutomation], {
    nullable: false
  })
  async CourseOnTermAutomations(@TypeGraphQL.Root() automation: Automation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AutomationCourseOnTermAutomationsArgs): Promise<CourseOnTermAutomation[]> {
    return getPrismaFromContext(ctx).automation.findUnique({
      where: {
        AutomationID: automation.AutomationID,
      },
    }).CourseOnTermAutomations(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() automation: Automation, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).automation.findUnique({
      where: {
        AutomationID: automation.AutomationID,
      },
    }).FK_User({});
  }
}
