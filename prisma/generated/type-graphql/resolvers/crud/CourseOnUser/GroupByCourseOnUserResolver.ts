import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCourseOnUserArgs } from "./args/GroupByCourseOnUserArgs";
import { CourseOnUser } from "../../../models/CourseOnUser";
import { CourseOnUserGroupBy } from "../../outputs/CourseOnUserGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnUser)
export class GroupByCourseOnUserResolver {
  @TypeGraphQL.Query(_returns => [CourseOnUserGroupBy], {
    nullable: false
  })
  async groupByCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCourseOnUserArgs): Promise<CourseOnUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
