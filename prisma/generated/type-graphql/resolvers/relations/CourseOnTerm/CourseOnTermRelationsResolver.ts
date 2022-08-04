import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { Flow } from "../../../models/Flow";
import { Task } from "../../../models/Task";
import { Term } from "../../../models/Term";
import { CourseOnTermCourseOnTermAutomationArgs } from "./args/CourseOnTermCourseOnTermAutomationArgs";
import { CourseOnTermFK_FlowsArgs } from "./args/CourseOnTermFK_FlowsArgs";
import { CourseOnTermFK_TasksArgs } from "./args/CourseOnTermFK_TasksArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTerm)
export class CourseOnTermRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Course, {
    nullable: true
  })
  async FK_Course(@TypeGraphQL.Root() courseOnTerm: CourseOnTerm, @TypeGraphQL.Ctx() ctx: any): Promise<Course | null> {
    return getPrismaFromContext(ctx).courseOnTerm.findUnique({
      where: {
        CourseOnTermID: courseOnTerm.CourseOnTermID,
      },
    }).FK_Course({});
  }

  @TypeGraphQL.FieldResolver(_type => Term, {
    nullable: true
  })
  async FK_Term(@TypeGraphQL.Root() courseOnTerm: CourseOnTerm, @TypeGraphQL.Ctx() ctx: any): Promise<Term | null> {
    return getPrismaFromContext(ctx).courseOnTerm.findUnique({
      where: {
        CourseOnTermID: courseOnTerm.CourseOnTermID,
      },
    }).FK_Term({});
  }

  @TypeGraphQL.FieldResolver(_type => [Flow], {
    nullable: false
  })
  async FK_Flows(@TypeGraphQL.Root() courseOnTerm: CourseOnTerm, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseOnTermFK_FlowsArgs): Promise<Flow[]> {
    return getPrismaFromContext(ctx).courseOnTerm.findUnique({
      where: {
        CourseOnTermID: courseOnTerm.CourseOnTermID,
      },
    }).FK_Flows(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async FK_Tasks(@TypeGraphQL.Root() courseOnTerm: CourseOnTerm, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseOnTermFK_TasksArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).courseOnTerm.findUnique({
      where: {
        CourseOnTermID: courseOnTerm.CourseOnTermID,
      },
    }).FK_Tasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CourseOnTermAutomation], {
    nullable: false
  })
  async CourseOnTermAutomation(@TypeGraphQL.Root() courseOnTerm: CourseOnTerm, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseOnTermCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation[]> {
    return getPrismaFromContext(ctx).courseOnTerm.findUnique({
      where: {
        CourseOnTermID: courseOnTerm.CourseOnTermID,
      },
    }).CourseOnTermAutomation(args);
  }
}
