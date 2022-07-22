import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertCourseOnTermAutomationArgs } from "./args/UpsertCourseOnTermAutomationArgs";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTermAutomation)
export class UpsertCourseOnTermAutomationResolver {
  @TypeGraphQL.Mutation(_returns => CourseOnTermAutomation, {
    nullable: false
  })
  async upsertCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCourseOnTermAutomationArgs): Promise<CourseOnTermAutomation> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTermAutomation.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
