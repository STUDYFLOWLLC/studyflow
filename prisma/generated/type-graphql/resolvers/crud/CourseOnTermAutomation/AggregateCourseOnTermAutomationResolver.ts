import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCourseOnTermAutomationArgs } from "./args/AggregateCourseOnTermAutomationArgs";
import { CourseOnTermAutomation } from "../../../models/CourseOnTermAutomation";
import { AggregateCourseOnTermAutomation } from "../../outputs/AggregateCourseOnTermAutomation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTermAutomation)
export class AggregateCourseOnTermAutomationResolver {
  @TypeGraphQL.Query(_returns => AggregateCourseOnTermAutomation, {
    nullable: false
  })
  async aggregateCourseOnTermAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCourseOnTermAutomationArgs): Promise<AggregateCourseOnTermAutomation> {
    return getPrismaFromContext(ctx).courseOnTermAutomation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
