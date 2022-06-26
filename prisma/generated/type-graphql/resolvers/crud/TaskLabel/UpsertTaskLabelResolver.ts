import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTaskLabelArgs } from "./args/UpsertTaskLabelArgs";
import { TaskLabel } from "../../../models/TaskLabel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskLabel)
export class UpsertTaskLabelResolver {
  @TypeGraphQL.Mutation(_returns => TaskLabel, {
    nullable: false
  })
  async upsertTaskLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTaskLabelArgs): Promise<TaskLabel> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).taskLabel.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
