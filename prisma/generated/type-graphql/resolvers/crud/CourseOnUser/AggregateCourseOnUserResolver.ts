import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCourseOnUserArgs } from "./args/AggregateCourseOnUserArgs";
import { CourseOnUser } from "../../../models/CourseOnUser";
import { AggregateCourseOnUser } from "../../outputs/AggregateCourseOnUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnUser)
export class AggregateCourseOnUserResolver {
  @TypeGraphQL.Query(_returns => AggregateCourseOnUser, {
    nullable: false
  })
  async aggregateCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCourseOnUserArgs): Promise<AggregateCourseOnUser> {
    return getPrismaFromContext(ctx).courseOnUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
