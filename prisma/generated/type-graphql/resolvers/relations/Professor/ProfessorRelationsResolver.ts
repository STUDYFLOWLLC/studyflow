import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { Professor } from "../../../models/Professor";
import { ProfessorFK_CoursesArgs } from "./args/ProfessorFK_CoursesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Professor)
export class ProfessorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Course], {
    nullable: false
  })
  async FK_Courses(@TypeGraphQL.Root() professor: Professor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProfessorFK_CoursesArgs): Promise<Course[]> {
    return getPrismaFromContext(ctx).professor.findUnique({
      where: {
        ProfessorID: professor.ProfessorID,
      },
    }).FK_Courses(args);
  }
}
