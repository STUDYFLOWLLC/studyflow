import * as TypeGraphQL from "type-graphql";
import { Professor } from "../../../models/Professor";
import { ProfessorsOnCourses } from "../../../models/ProfessorsOnCourses";
import { ProfessorFK_CoursesArgs } from "./args/ProfessorFK_CoursesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Professor)
export class ProfessorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ProfessorsOnCourses], {
    nullable: false
  })
  async FK_Courses(@TypeGraphQL.Root() professor: Professor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProfessorFK_CoursesArgs): Promise<ProfessorsOnCourses[]> {
    return getPrismaFromContext(ctx).professor.findUnique({
      where: {
        ProfessorID: professor.ProfessorID,
      },
    }).FK_Courses(args);
  }
}
