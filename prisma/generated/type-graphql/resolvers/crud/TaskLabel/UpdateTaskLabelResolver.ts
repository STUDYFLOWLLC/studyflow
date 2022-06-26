import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateTaskLabelArgs } from "./args/UpdateTaskLabelArgs";
import { TaskLabel } from "../../../models/TaskLabel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskLabel)
export class UpdateTaskLabelResolver {
  @TypeGraphQL.Mutation(_returns => TaskLabel, {
    nullable: true
  })
  async updateTaskLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTaskLabelArgs): Promise<TaskLabel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).taskLabel.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
