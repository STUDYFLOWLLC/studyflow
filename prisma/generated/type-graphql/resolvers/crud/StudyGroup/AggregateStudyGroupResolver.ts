import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStudyGroupArgs } from "./args/AggregateStudyGroupArgs";
import { StudyGroup } from "../../../models/StudyGroup";
import { AggregateStudyGroup } from "../../outputs/AggregateStudyGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StudyGroup)
export class AggregateStudyGroupResolver {
  @TypeGraphQL.Query(_returns => AggregateStudyGroup, {
    nullable: false
  })
  async aggregateStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStudyGroupArgs): Promise<AggregateStudyGroup> {
    return getPrismaFromContext(ctx).studyGroup.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
