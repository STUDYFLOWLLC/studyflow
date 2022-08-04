import * as TypeGraphQL from "type-graphql";
import { StudyGroup } from "../../../models/StudyGroup";
import { User } from "../../../models/User";
import { UserOnStudyGroup } from "../../../models/UserOnStudyGroup";
import { StudyGroupFK_UserOnStudyGroupArgs } from "./args/StudyGroupFK_UserOnStudyGroupArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudyGroup)
export class StudyGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() studyGroup: StudyGroup, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).studyGroup.findUnique({
      where: {
        StudyGroupID: studyGroup.StudyGroupID,
      },
    }).FK_User({});
  }

  @TypeGraphQL.FieldResolver(_type => [UserOnStudyGroup], {
    nullable: false
  })
  async FK_UserOnStudyGroup(@TypeGraphQL.Root() studyGroup: StudyGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StudyGroupFK_UserOnStudyGroupArgs): Promise<UserOnStudyGroup[]> {
    return getPrismaFromContext(ctx).studyGroup.findUnique({
      where: {
        StudyGroupID: studyGroup.StudyGroupID,
      },
    }).FK_UserOnStudyGroup(args);
  }
}
