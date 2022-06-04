import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProfessorsOnCoursesArgs } from "./args/AggregateProfessorsOnCoursesArgs";
import { ProfessorsOnCourses } from "../../../models/ProfessorsOnCourses";
import { AggregateProfessorsOnCourses } from "../../outputs/AggregateProfessorsOnCourses";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProfessorsOnCourses)
export class AggregateProfessorsOnCoursesResolver {
  @TypeGraphQL.Query(_returns => AggregateProfessorsOnCourses, {
    nullable: false
  })
  async aggregateProfessorsOnCourses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProfessorsOnCoursesArgs): Promise<AggregateProfessorsOnCourses> {
    return getPrismaFromContext(ctx).professorsOnCourses.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
