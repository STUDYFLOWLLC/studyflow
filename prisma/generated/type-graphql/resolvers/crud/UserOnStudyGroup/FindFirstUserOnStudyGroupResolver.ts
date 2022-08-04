import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstUserOnStudyGroupArgs } from "./args/FindFirstUserOnStudyGroupArgs";
import { UserOnStudyGroup } from "../../../models/UserOnStudyGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserOnStudyGroup)
export class FindFirstUserOnStudyGroupResolver {
  @TypeGraphQL.Query(_returns => UserOnStudyGroup, {
    nullable: true
  })
  async findFirstUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserOnStudyGroupArgs): Promise<UserOnStudyGroup | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
