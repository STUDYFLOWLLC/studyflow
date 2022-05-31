import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlashCardStackArgs } from "./args/AggregateFlashCardStackArgs";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { AggregateFlashCardStack } from "../../outputs/AggregateFlashCardStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCardStack)
export class AggregateFlashCardStackResolver {
  @TypeGraphQL.Query(_returns => AggregateFlashCardStack, {
    nullable: false
  })
  async aggregateFlashCardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlashCardStackArgs): Promise<AggregateFlashCardStack> {
    return getPrismaFromContext(ctx).flashCardStack.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
