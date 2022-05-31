import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { CourseOnUser } from "../../../models/CourseOnUser";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnUser)
export class CourseOnUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() courseOnUser: CourseOnUser, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).courseOnUser.findUnique({
      where: {
        CourseOnUserID: courseOnUser.CourseOnUserID,
      },
    }).FK_User({});
  }

  @TypeGraphQL.FieldResolver(_type => Course, {
    nullable: true
  })
  async FK_Course(@TypeGraphQL.Root() courseOnUser: CourseOnUser, @TypeGraphQL.Ctx() ctx: any): Promise<Course | null> {
    return getPrismaFromContext(ctx).courseOnUser.findUnique({
      where: {
        CourseOnUserID: courseOnUser.CourseOnUserID,
      },
    }).FK_Course({});
  }
}
