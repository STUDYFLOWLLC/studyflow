import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserOnStudyGroupArgs } from "./args/FindUniqueUserOnStudyGroupArgs";
import { UserOnStudyGroup } from "../../../models/UserOnStudyGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserOnStudyGroup)
export class FindUniqueUserOnStudyGroupResolver {
  @TypeGraphQL.Query(_returns => UserOnStudyGroup, {
    nullable: true
  })
  async userOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserOnStudyGroupArgs): Promise<UserOnStudyGroup | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
