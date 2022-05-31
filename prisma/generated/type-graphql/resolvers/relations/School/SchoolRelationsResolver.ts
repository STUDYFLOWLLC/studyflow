import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { School } from "../../../models/School";
import { SchoolFK_CourseArgs } from "./args/SchoolFK_CourseArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => School)
export class SchoolRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Course], {
    nullable: false
  })
  async FK_Course(@TypeGraphQL.Root() school: School, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SchoolFK_CourseArgs): Promise<Course[]> {
    return getPrismaFromContext(ctx).school.findUnique({
      where: {
        SchoolID: school.SchoolID,
      },
    }).FK_Course(args);
  }
}
