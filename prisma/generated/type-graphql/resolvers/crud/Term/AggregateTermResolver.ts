import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTermArgs } from "./args/AggregateTermArgs";
import { Term } from "../../../models/Term";
import { AggregateTerm } from "../../outputs/AggregateTerm";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Term)
export class AggregateTermResolver {
  @TypeGraphQL.Query(_returns => AggregateTerm, {
    nullable: false
  })
  async aggregateTerm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTermArgs): Promise<AggregateTerm> {
    return getPrismaFromContext(ctx).term.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
