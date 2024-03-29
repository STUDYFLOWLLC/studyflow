import * as TypeGraphQL from "type-graphql";
import { Automation } from "../../../models/Automation";
import { Blog } from "../../../models/Blog";
import { BugReport } from "../../../models/BugReport";
import { FeatureRequest } from "../../../models/FeatureRequest";
import { Flow } from "../../../models/Flow";
import { FlowView } from "../../../models/FlowView";
import { Friendship } from "../../../models/Friendship";
import { School } from "../../../models/School";
import { Setting } from "../../../models/Setting";
import { StudyGroup } from "../../../models/StudyGroup";
import { Task } from "../../../models/Task";
import { Term } from "../../../models/Term";
import { User } from "../../../models/User";
import { UserOnStudyGroup } from "../../../models/UserOnStudyGroup";
import { UserFK_AutomationArgs } from "./args/UserFK_AutomationArgs";
import { UserFK_BlogArgs } from "./args/UserFK_BlogArgs";
import { UserFK_BugReportArgs } from "./args/UserFK_BugReportArgs";
import { UserFK_FeatureRequestArgs } from "./args/UserFK_FeatureRequestArgs";
import { UserFK_FlowArgs } from "./args/UserFK_FlowArgs";
import { UserFK_FlowViewArgs } from "./args/UserFK_FlowViewArgs";
import { UserFK_FriendshipsAcceptedArgs } from "./args/UserFK_FriendshipsAcceptedArgs";
import { UserFK_FriendshipsInitiatedArgs } from "./args/UserFK_FriendshipsInitiatedArgs";
import { UserFK_StudyGroupsArgs } from "./args/UserFK_StudyGroupsArgs";
import { UserFK_TaskArgs } from "./args/UserFK_TaskArgs";
import { UserFK_TermsArgs } from "./args/UserFK_TermsArgs";
import { UserFK_UserOnStudyGroupsArgs } from "./args/UserFK_UserOnStudyGroupsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => School, {
    nullable: true
  })
  async FK_School(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<School | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_School({});
  }

  @TypeGraphQL.FieldResolver(_type => [Term], {
    nullable: false
  })
  async FK_Terms(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_TermsArgs): Promise<Term[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_Terms(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async FK_Task(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_TaskArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_Task(args);
  }

  @TypeGraphQL.FieldResolver(_type => Setting, {
    nullable: true
  })
  async FK_Settings(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Setting | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_Settings({});
  }

  @TypeGraphQL.FieldResolver(_type => [FlowView], {
    nullable: false
  })
  async FK_FlowView(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_FlowViewArgs): Promise<FlowView[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_FlowView(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Flow], {
    nullable: false
  })
  async FK_Flow(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_FlowArgs): Promise<Flow[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_Flow(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Automation], {
    nullable: false
  })
  async FK_Automation(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_AutomationArgs): Promise<Automation[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_Automation(args);
  }

  @TypeGraphQL.FieldResolver(_type => [StudyGroup], {
    nullable: false
  })
  async FK_StudyGroups(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_StudyGroupsArgs): Promise<StudyGroup[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_StudyGroups(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UserOnStudyGroup], {
    nullable: false
  })
  async FK_UserOnStudyGroups(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_UserOnStudyGroupsArgs): Promise<UserOnStudyGroup[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_UserOnStudyGroups(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Friendship], {
    nullable: false
  })
  async FK_FriendshipsInitiated(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_FriendshipsInitiatedArgs): Promise<Friendship[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_FriendshipsInitiated(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Friendship], {
    nullable: false
  })
  async FK_FriendshipsAccepted(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_FriendshipsAcceptedArgs): Promise<Friendship[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_FriendshipsAccepted(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Blog], {
    nullable: false
  })
  async FK_Blog(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_BlogArgs): Promise<Blog[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_Blog(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BugReport], {
    nullable: false
  })
  async FK_BugReport(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_BugReportArgs): Promise<BugReport[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_BugReport(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FeatureRequest], {
    nullable: false
  })
  async FK_FeatureRequest(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_FeatureRequestArgs): Promise<FeatureRequest[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_FeatureRequest(args);
  }
}
