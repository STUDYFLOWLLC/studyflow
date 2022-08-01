import * as TypeGraphQL from "type-graphql";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { Flow } from "../../../models/Flow";
import { FlowView } from "../../../models/FlowView";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { FlowFK_FlashcardStacksArgs } from "./args/FlowFK_FlashcardStacksArgs";
import { FlowFK_FlowViewArgs } from "./args/FlowFK_FlowViewArgs";
import { FlowFK_TasksArgs } from "./args/FlowFK_TasksArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flow)
export class FlowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CourseOnTerm, {
    nullable: true
  })
  async FK_CourseOnTerm(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any): Promise<CourseOnTerm | null> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).FK_CourseOnTerm({});
  }

  @TypeGraphQL.FieldResolver(_type => [FlashcardStack], {
    nullable: false
  })
  async FK_FlashcardStacks(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlowFK_FlashcardStacksArgs): Promise<FlashcardStack[]> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).FK_FlashcardStacks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async FK_Tasks(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlowFK_TasksArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).FK_Tasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FlowView], {
    nullable: false
  })
  async FK_FlowView(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlowFK_FlowViewArgs): Promise<FlowView[]> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).FK_FlowView(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).FK_User({});
  }
}
