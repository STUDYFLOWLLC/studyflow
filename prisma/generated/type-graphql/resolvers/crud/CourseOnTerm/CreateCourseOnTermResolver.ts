import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateCourseOnTermArgs } from "./args/CreateCourseOnTermArgs";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTerm)
export class CreateCourseOnTermResolver {
  @TypeGraphQL.Mutation(_returns => CourseOnTerm, {
    nullable: false
  })
  async createCourseOnTerm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCourseOnTermArgs): Promise<CourseOnTerm> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).courseOnTerm.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
