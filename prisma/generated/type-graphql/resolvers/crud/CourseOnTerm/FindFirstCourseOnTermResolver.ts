import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCourseOnTermArgs } from "./args/FindFirstCourseOnTermArgs";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTerm)
export class FindFirstCourseOnTermResolver {
  @TypeGraphQL.Query(_returns => CourseOnTerm, {
    nullable: true
  })
  async findFirstCourseOnTerm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCourseOnTermArgs): Promise<CourseOnTerm | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTerm.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
