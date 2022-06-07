import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCourseOnTermArgs } from "./args/FindManyCourseOnTermArgs";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTerm)
export class FindManyCourseOnTermResolver {
  @TypeGraphQL.Query(_returns => [CourseOnTerm], {
    nullable: false
  })
  async courseOnTerms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCourseOnTermArgs): Promise<CourseOnTerm[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTerm.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
