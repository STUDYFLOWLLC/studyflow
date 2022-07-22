import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAutomationArgs } from "./args/AggregateAutomationArgs";
import { Automation } from "../../../models/Automation";
import { AggregateAutomation } from "../../outputs/AggregateAutomation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Automation)
export class AggregateAutomationResolver {
  @TypeGraphQL.Query(_returns => AggregateAutomation, {
    nullable: false
  })
  async aggregateAutomation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAutomationArgs): Promise<AggregateAutomation> {
    return getPrismaFromContext(ctx).automation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
