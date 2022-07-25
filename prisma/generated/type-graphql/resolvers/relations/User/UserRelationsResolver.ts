import * as TypeGraphQL from "type-graphql";
import { Automation } from "../../../models/Automation";
import { Flow } from "../../../models/Flow";
import { FlowView } from "../../../models/FlowView";
import { School } from "../../../models/School";
import { Setting } from "../../../models/Setting";
import { Task } from "../../../models/Task";
import { Term } from "../../../models/Term";
import { User } from "../../../models/User";
import { UserFK_AutomationArgs } from "./args/UserFK_AutomationArgs";
import { UserFK_FlowArgs } from "./args/UserFK_FlowArgs";
import { UserFK_FlowViewArgs } from "./args/UserFK_FlowViewArgs";
import { UserFK_TaskArgs } from "./args/UserFK_TaskArgs";
import { UserFK_TermsArgs } from "./args/UserFK_TermsArgs";
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
}
