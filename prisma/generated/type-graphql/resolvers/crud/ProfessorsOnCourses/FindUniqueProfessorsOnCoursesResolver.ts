import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProfessorsOnCoursesArgs } from "./args/FindUniqueProfessorsOnCoursesArgs";
import { ProfessorsOnCourses } from "../../../models/ProfessorsOnCourses";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProfessorsOnCourses)
export class FindUniqueProfessorsOnCoursesResolver {
  @TypeGraphQL.Query(_returns => ProfessorsOnCourses, {
    nullable: true
  })
  async findUniqueProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProfessorsOnCoursesArgs): Promise<ProfessorsOnCourses | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
