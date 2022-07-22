import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCourseOnTermAutomationArgs } from "./args/FindManyCourseOnTermAutomationArgs";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTermAutomation)
export class FindManyCourseOnTermAutomationResolver {
  @TypeGraphQL.Query(_returns => [CourseOnTermAutomation], {
    nullable: false
  })
  async courseOnTermAutomations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
