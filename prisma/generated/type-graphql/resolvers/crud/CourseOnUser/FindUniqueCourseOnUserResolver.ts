import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCourseOnUserArgs } from "./args/FindUniqueCourseOnUserArgs";
import { CourseOnUser } from "../../../models/CourseOnUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnUser)
export class FindUniqueCourseOnUserResolver {
  @TypeGraphQL.Query(_returns => CourseOnUser, {
    nullable: true
  })
  async courseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCourseOnUserArgs): Promise<CourseOnUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
