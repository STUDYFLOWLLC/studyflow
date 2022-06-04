import * as TypeGraphQL from "type-graphql";
import { Term } from "../../../models/Term";
import { User } from "../../../models/User";
import { UserFK_TermsArgs } from "./args/UserFK_TermsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Term], {
    nullable: false
  })
  async FK_Terms(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_TermsArgs): Promise<Term[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_Terms(args);
  }
}
