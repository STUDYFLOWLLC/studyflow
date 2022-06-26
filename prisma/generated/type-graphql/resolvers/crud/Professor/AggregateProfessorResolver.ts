import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProfessorArgs } from "./args/AggregateProfessorArgs";
import { Professor } from "../../../models/Professor";
import { AggregateProfessor } from "../../outputs/AggregateProfessor";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Professor)
export class AggregateProfessorResolver {
  @TypeGraphQL.Query(_returns => AggregateProfessor, {
    nullable: false
  })
  async aggregateProfessor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProfessorArgs): Promise<AggregateProfessor> {
    return getPrismaFromContext(ctx).professor.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
