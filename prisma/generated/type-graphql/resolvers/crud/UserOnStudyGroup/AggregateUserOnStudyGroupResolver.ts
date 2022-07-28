import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserOnStudyGroupArgs } from "./args/AggregateUserOnStudyGroupArgs";
import { UserOnStudyGroup } from "../../../models/UserOnStudyGroup";
import { AggregateUserOnStudyGroup } from "../../outputs/AggregateUserOnStudyGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserOnStudyGroup)
export class AggregateUserOnStudyGroupResolver {
  @TypeGraphQL.Query(_returns => AggregateUserOnStudyGroup, {
    nullable: false
  })
  async aggregateUserOnStudyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserOnStudyGroupArgs): Promise<AggregateUserOnStudyGroup> {
    return getPrismaFromContext(ctx).userOnStudyGroup.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
