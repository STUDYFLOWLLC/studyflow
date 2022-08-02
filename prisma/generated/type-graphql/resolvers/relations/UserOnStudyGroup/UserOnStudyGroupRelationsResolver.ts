import * as TypeGraphQL from "type-graphql";
import { StudyGroup } from "../../../models/StudyGroup";
import { User } from "../../../models/User";
import { UserOnStudyGroup } from "../../../models/UserOnStudyGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserOnStudyGroup)
export class UserOnStudyGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() userOnStudyGroup: UserOnStudyGroup, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).userOnStudyGroup.findUnique({
      where: {
        UserOnStudyGroupID: userOnStudyGroup.UserOnStudyGroupID,
      },
    }).FK_User({});
  }

  @TypeGraphQL.FieldResolver(_type => StudyGroup, {
    nullable: true
  })
  async FK_StudyGroup(@TypeGraphQL.Root() userOnStudyGroup: UserOnStudyGroup, @TypeGraphQL.Ctx() ctx: any): Promise<StudyGroup | null> {
    return getPrismaFromContext(ctx).userOnStudyGroup.findUnique({
      where: {
        UserOnStudyGroupID: userOnStudyGroup.UserOnStudyGroupID,
      },
    }).FK_StudyGroup({});
  }
}
