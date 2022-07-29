import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateUserOnStudyGroupArgs } from "./args/UpdateUserOnStudyGroupArgs";
import { UserOnStudyGroup } from "../../../models/UserOnStudyGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserOnStudyGroup)
export class UpdateUserOnStudyGroupResolver {
  @TypeGraphQL.Mutation(_returns => UserOnStudyGroup, {
    nullable: true
  })
  async updateUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateUserOnStudyGroupArgs): Promise<UserOnStudyGroup | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
