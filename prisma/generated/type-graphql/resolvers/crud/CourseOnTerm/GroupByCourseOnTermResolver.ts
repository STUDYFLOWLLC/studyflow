import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCourseOnTermArgs } from "./args/GroupByCourseOnTermArgs";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { CourseOnTermGroupBy } from "../../outputs/CourseOnTermGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTerm)
export class GroupByCourseOnTermResolver {
  @TypeGraphQL.Query(_returns => [CourseOnTermGroupBy], {
    nullable: false
  })
  async groupByCourseOnTerm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCourseOnTermArgs): Promise<CourseOnTermGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTerm.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
