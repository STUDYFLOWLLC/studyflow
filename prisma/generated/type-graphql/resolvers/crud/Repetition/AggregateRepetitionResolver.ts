import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRepetitionArgs } from "./args/AggregateRepetitionArgs";
import { Repetition } from "../../../models/Repetition";
import { AggregateRepetition } from "../../outputs/AggregateRepetition";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Repetition)
export class AggregateRepetitionResolver {
  @TypeGraphQL.Query(_returns => AggregateRepetition, {
    nullable: false
  })
  async aggregateRepetition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRepetitionArgs): Promise<AggregateRepetition> {
    return getPrismaFromContext(ctx).repetition.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
