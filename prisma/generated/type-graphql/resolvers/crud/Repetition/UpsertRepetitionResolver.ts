import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertRepetitionArgs } from "./args/UpsertRepetitionArgs";
import { Repetition } from "../../../models/Repetition";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Repetition)
export class UpsertRepetitionResolver {
  @TypeGraphQL.Mutation(_returns => Repetition, {
    nullable: false
  })
  async upsertRepetition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertRepetitionArgs): Promise<Repetition> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).repetition.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
