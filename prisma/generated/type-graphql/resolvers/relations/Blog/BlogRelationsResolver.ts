import * as TypeGraphQL from "type-graphql";
import { Blog } from "../../../models/Blog";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blog)
export class BlogRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() blog: Blog, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).blog.findUnique({
      where: {
        BlogID: blog.BlogID,
      },
    }).FK_User({});
  }
}
