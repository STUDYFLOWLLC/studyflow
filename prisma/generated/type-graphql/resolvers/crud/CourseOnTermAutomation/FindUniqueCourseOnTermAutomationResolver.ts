import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCourseOnTermAutomationArgs } from "./args/FindUniqueCourseOnTermAutomationArgs";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTermAutomation)
export class FindUniqueCourseOnTermAutomationResolver {
  @TypeGraphQL.Query(_returns => CourseOnTermAutomation, {
    nullable: true
  })
  async courseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
