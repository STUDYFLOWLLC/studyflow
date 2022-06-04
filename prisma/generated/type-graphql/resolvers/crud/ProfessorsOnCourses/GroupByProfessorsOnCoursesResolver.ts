import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProfessorsOnCoursesArgs } from "./args/GroupByProfessorsOnCoursesArgs";
import { ProfessorsOnCourses } from "../../../models/ProfessorsOnCourses";
import { ProfessorsOnCoursesGroupBy } from "../../outputs/ProfessorsOnCoursesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProfessorsOnCourses)
export class GroupByProfessorsOnCoursesResolver {
  @TypeGraphQL.Query(_returns => [ProfessorsOnCoursesGroupBy], {
    nullable: false
  })
  async groupByProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProfessorsOnCoursesArgs): Promise<ProfessorsOnCoursesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).professorsOnCourses.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
