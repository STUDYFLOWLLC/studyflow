import * as TypeGraphQL from "type-graphql";
import { Automation } from "../../../models/Automation";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTermAutomation)
export class CourseOnTermAutomationRelationsResolver {
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
