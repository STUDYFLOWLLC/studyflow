import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateCourseOnUserArgs } from "./args/CreateCourseOnUserArgs";
import { CourseOnUser } from "../../../models/CourseOnUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnUser)
export class CreateCourseOnUserResolver {
  @TypeGraphQL.Mutation(_returns => CourseOnUser, {
    nullable: false
  })
  async createCourseOnUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCourseOnUserArgs): Promise<CourseOnUser> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
