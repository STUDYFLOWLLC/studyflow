import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { Professor } from "../../../models/Professor";
import { School } from "../../../models/School";
import { CourseFK_ProfessorsArgs } from "./args/CourseFK_ProfessorsArgs";
import { CourseFK_TermsOnCourseArgs } from "./args/CourseFK_TermsOnCourseArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Course)
export class CourseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => School, {
    nullable: true
  })
  async FK_School(@TypeGraphQL.Root() course: Course, @TypeGraphQL.Ctx() ctx: any): Promise<School | null> {
    return getPrismaFromContext(ctx).course.findUnique({
      where: {
        CourseID: course.CourseID,
      },
    }).FK_School({});
  }

  @TypeGraphQL.FieldResolver(_type => [Professor], {
    nullable: false
  })
  async FK_Professors(@TypeGraphQL.Root() course: Course, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseFK_ProfessorsArgs): Promise<Professor[]> {
    return getPrismaFromContext(ctx).course.findUnique({
      where: {
        CourseID: course.CourseID,
      },
    }).FK_Professors(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CourseOnTerm], {
    nullable: false
  })
  async FK_TermsOnCourse(@TypeGraphQL.Root() course: Course, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseFK_TermsOnCourseArgs): Promise<CourseOnTerm[]> {
    return getPrismaFromContext(ctx).course.findUnique({
      where: {
        CourseID: course.CourseID,
      },
    }).FK_TermsOnCourse(args);
  }
}
