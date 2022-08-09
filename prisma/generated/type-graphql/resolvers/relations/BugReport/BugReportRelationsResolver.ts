import * as TypeGraphQL from "type-graphql";
import { BugReport } from "../../../models/BugReport";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BugReport)
export class BugReportRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() bugReport: BugReport, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).bugReport.findUnique({
      where: {
        BugReportID: bugReport.BugReportID,
      },
    }).FK_User({});
  }
}
