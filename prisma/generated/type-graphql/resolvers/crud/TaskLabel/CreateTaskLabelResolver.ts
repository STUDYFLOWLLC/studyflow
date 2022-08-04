import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateTaskLabelArgs } from "./args/CreateTaskLabelArgs";
import { TaskLabel } from "../../../models/TaskLabel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskLabel)
export class CreateTaskLabelResolver {
  @TypeGraphQL.Mutation(_returns => TaskLabel, {
    nullable: false
  })
  async createTaskLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTaskLabelArgs): Promise<TaskLabel> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).taskLabel.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
