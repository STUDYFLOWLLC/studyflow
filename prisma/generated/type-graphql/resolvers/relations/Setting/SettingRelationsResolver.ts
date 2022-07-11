import * as TypeGraphQL from "type-graphql";
import { Setting } from "../../../models/Setting";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Setting)
export class SettingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() setting: Setting, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).setting.findUnique({
      where: {
        SettingID: setting.SettingID,
      },
    }).FK_User({});
  }
}
