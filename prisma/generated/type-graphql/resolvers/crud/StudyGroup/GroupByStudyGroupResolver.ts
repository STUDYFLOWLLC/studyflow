import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByStudyGroupArgs } from "./args/GroupByStudyGroupArgs";
import { StudyGroup } from "../../../models/StudyGroup";
import { StudyGroupGroupBy } from "../../outputs/StudyGroupGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudyGroup)
export class GroupByStudyGroupResolver {
  @TypeGraphQL.Query(_returns => [StudyGroupGroupBy], {
    nullable: false
  })
  async groupByStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByStudyGroupArgs): Promise<StudyGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).studyGroup.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
