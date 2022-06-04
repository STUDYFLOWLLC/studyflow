import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { Professor } from "../../../models/Professor";
import { ProfessorsOnCourses } from "../../../models/ProfessorsOnCourses";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProfessorsOnCourses)
export class ProfessorsOnCoursesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Course, {
    nullable: false
  })
  async FK_Course(@TypeGraphQL.Root() professorsOnCourses: ProfessorsOnCourses, @TypeGraphQL.Ctx() ctx: any): Promise<Course> {
    return getPrismaFromContext(ctx).professorsOnCourses.findUnique({
      where: {
        ProfessorsOnCoursesID: professorsOnCourses.ProfessorsOnCoursesID,
      },
    }).FK_Course({});
  }

  @TypeGraphQL.FieldResolver(_type => Professor, {
    nullable: false
  })
  async FK_Professor(@TypeGraphQL.Root() professorsOnCourses: ProfessorsOnCourses, @TypeGraphQL.Ctx() ctx: any): Promise<Professor> {
    return getPrismaFromContext(ctx).professorsOnCourses.findUnique({
      where: {
        ProfessorsOnCoursesID: professorsOnCourses.ProfessorsOnCoursesID,
      },
    }).FK_Professor({});
  }
}
