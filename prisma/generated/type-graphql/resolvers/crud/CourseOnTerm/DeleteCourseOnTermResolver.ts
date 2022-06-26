import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteCourseOnTermArgs } from "./args/DeleteCourseOnTermArgs";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTerm)
export class DeleteCourseOnTermResolver {
  @TypeGraphQL.Mutation(_returns => CourseOnTerm, {
    nullable: true
  })
  async deleteCourseOnTerm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCourseOnTermArgs): Promise<CourseOnTerm | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTerm.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
