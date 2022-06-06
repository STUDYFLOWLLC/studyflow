import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { Professor } from "../../../models/Professor";
import { School } from "../../../models/School";
import { Term } from "../../../models/Term";
import { User } from "../../../models/User";
import { SchoolFK_CourseArgs } from "./args/SchoolFK_CourseArgs";
import { SchoolFK_ProfessorArgs } from "./args/SchoolFK_ProfessorArgs";
import { SchoolFK_UserArgs } from "./args/SchoolFK_UserArgs";
import { SchoolTermArgs } from "./args/SchoolTermArgs";
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

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async FK_User(@TypeGraphQL.Root() school: School, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SchoolFK_UserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).school.findUnique({
      where: {
        SchoolID: school.SchoolID,
      },
    }).FK_User(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Professor], {
    nullable: false
  })
  async FK_Professor(@TypeGraphQL.Root() school: School, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SchoolFK_ProfessorArgs): Promise<Professor[]> {
    return getPrismaFromContext(ctx).school.findUnique({
      where: {
        SchoolID: school.SchoolID,
      },
    }).FK_Professor(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Term], {
    nullable: false
  })
  async Term(@TypeGraphQL.Root() school: School, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SchoolTermArgs): Promise<Term[]> {
    return getPrismaFromContext(ctx).school.findUnique({
      where: {
        SchoolID: school.SchoolID,
      },
    }).Term(args);
  }
}
