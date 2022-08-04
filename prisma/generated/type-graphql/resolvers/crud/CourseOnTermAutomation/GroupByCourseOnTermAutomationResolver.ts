import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCourseOnTermAutomationArgs } from "./args/GroupByCourseOnTermAutomationArgs";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { CourseOnTermAutomationGroupBy } from "../../outputs/CourseOnTermAutomationGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTermAutomation)
export class GroupByCourseOnTermAutomationResolver {
  @TypeGraphQL.Query(_returns => [CourseOnTermAutomationGroupBy], {
    nullable: false
  })
  async groupByCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCourseOnTermAutomationArgs): Promise<CourseOnTermAutomationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
