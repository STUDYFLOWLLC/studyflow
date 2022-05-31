import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateCourseOnUserArgs } from "./args/UpdateCourseOnUserArgs";
import { CourseOnUser } from "../../../models/CourseOnUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnUser)
export class UpdateCourseOnUserResolver {
  @TypeGraphQL.Mutation(_returns => CourseOnUser, {
    nullable: true
  })
  async updateCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCourseOnUserArgs): Promise<CourseOnUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
