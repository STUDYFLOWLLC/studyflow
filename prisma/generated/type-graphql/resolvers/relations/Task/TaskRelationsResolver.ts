import * as TypeGraphQL from "type-graphql";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { Flow } from "../../../models/Flow";
import { Repetition } from "../../../models/Repetition";
import { Task } from "../../../models/Task";
import { TaskLabel } from "../../../models/TaskLabel";
import { User } from "../../../models/User";
import { TaskFK_TaskLabelArgs } from "./args/TaskFK_TaskLabelArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TaskLabel], {
    nullable: false
  })
  async FK_TaskLabel(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskFK_TaskLabelArgs): Promise<TaskLabel[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        TaskID: task.TaskID,
      },
    }).FK_TaskLabel(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        TaskID: task.TaskID,
      },
    }).FK_User({});
  }

  @TypeGraphQL.FieldResolver(_type => Flow, {
    nullable: true
  })
  async FK_Flow(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<Flow | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        TaskID: task.TaskID,
      },
    }).FK_Flow({});
  }

  @TypeGraphQL.FieldResolver(_type => CourseOnTerm, {
    nullable: true
  })
  async FK_CourseOnTerm(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<CourseOnTerm | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        TaskID: task.TaskID,
      },
    }).FK_CourseOnTerm({});
  }

  @TypeGraphQL.FieldResolver(_type => Repetition, {
    nullable: true
  })
  async FK_Repetition(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<Repetition | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        TaskID: task.TaskID,
      },
    }).FK_Repetition({});
  }
}
