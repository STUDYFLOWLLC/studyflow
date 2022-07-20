import * as TypeGraphQL from "type-graphql";
import { Automation } from "../../../models/Automation";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Automation)
export class AutomationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() automation: Automation, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).automation.findUnique({
      where: {
        AutomationID: automation.AutomationID,
      },
    }).FK_User({});
  }
}
