import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTaskLabelArgs } from "./args/AggregateTaskLabelArgs";
import { TaskLabel } from "../../../models/TaskLabel";
import { AggregateTaskLabel } from "../../outputs/AggregateTaskLabel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskLabel)
export class AggregateTaskLabelResolver {
  @TypeGraphQL.Query(_returns => AggregateTaskLabel, {
    nullable: false
  })
  async aggregateTaskLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTaskLabelArgs): Promise<AggregateTaskLabel> {
    return getPrismaFromContext(ctx).taskLabel.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
