import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCourseOnTermArgs } from "./args/AggregateCourseOnTermArgs";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { AggregateCourseOnTerm } from "../../outputs/AggregateCourseOnTerm";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTerm)
export class AggregateCourseOnTermResolver {
  @TypeGraphQL.Query(_returns => AggregateCourseOnTerm, {
    nullable: false
  })
  async aggregateCourseOnTerm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCourseOnTermArgs): Promise<AggregateCourseOnTerm> {
    return getPrismaFromContext(ctx).courseOnTerm.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
