import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyTaskLabelArgs } from "./args/FindManyTaskLabelArgs";
import { TaskLabel } from "../../../models/TaskLabel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskLabel)
export class FindManyTaskLabelResolver {
  @TypeGraphQL.Query(_returns => [TaskLabel], {
    nullable: false
  })
  async taskLabels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTaskLabelArgs): Promise<TaskLabel[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).taskLabel.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
