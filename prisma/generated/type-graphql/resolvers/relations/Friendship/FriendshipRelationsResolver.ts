import * as TypeGraphQL from "type-graphql";
import { Friendship } from "../../../models/Friendship";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Friendship)
export class FriendshipRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_UserFrom(@TypeGraphQL.Root() friendship: Friendship, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).friendship.findUnique({
      where: {
        FriendshipID: friendship.FriendshipID,
      },
    }).FK_UserFrom({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_UserTo(@TypeGraphQL.Root() friendship: Friendship, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).friendship.findUnique({
      where: {
        FriendshipID: friendship.FriendshipID,
      },
    }).FK_UserTo({});
  }
}
