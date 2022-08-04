import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateUserOnStudyGroupArgs } from "./args/CreateUserOnStudyGroupArgs";
import { UserOnStudyGroup } from "../../../models/UserOnStudyGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserOnStudyGroup)
export class CreateUserOnStudyGroupResolver {
  @TypeGraphQL.Mutation(_returns => UserOnStudyGroup, {
    nullable: false
  })
  async createUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateUserOnStudyGroupArgs): Promise<UserOnStudyGroup> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userOnStudyGroup.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
